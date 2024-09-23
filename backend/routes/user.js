const { Router} = require("express")
const router = Router()
const { validateUserSchema, validateUserUpdateSchema, validateSigninSchema } = require("../types")
const {User, Account} = require("../db")
const JWT_SECRET = require("../config")
const jwt = require("jsonwebtoken")
const {authMiddleware} = require("../middleware")


const validateUser = (req, res, next) => {
    const response = validateUserSchema.safeParse(req.body)
    if (response.success) {
        next()
    } else {
        return res.status(411).json({
            message: "Invalid user details"
        })
    }
}


router.post("/signup", validateUser, async (req, res) => {
    try {
        const data = await User.findOne({
            userName: req.body["userName"]
        })
        if (data) {
            return res.status(411).json({
                message: "User already exist"
            })
        } else {
           const userCreated = await User.create(req.body)
           const userId = userCreated._id
           await Account.create({
               userId : userId,
               balance : 1 + 10000 * Math.random()
           })
            return res.status(200).json({
                message: "User created successfully",
                token: jwt.sign({userId : userCreated._id}, JWT_SECRET)
            })
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
})

router.post("/signin", async (req, res) => {
    const {success} = validateSigninSchema.safeParse(req.body)
    if(success){
        const existingUser = await User.findOne({
            userName : req.body["userName"]
        })
        if(!existingUser){
            return res.status(411).json({
                message : "Error while logging in"
            })
        }
        else{
            return res.status(200).json({
                token : jwt.sign({userId : existingUser._id}, JWT_SECRET)
            })
        }
    }
    else{
        return res.status(411).json({
            message : "Error while logging in"
        })
    }
})

router.put("/", authMiddleware, async (req, res) => {
    const userId = req.userId
    const parsedData = validateUserUpdateSchema.safeParse(req.body)
    if(parsedData.success){
        await User.updateOne({
            _id : userId
        },
        req.body)
        return res.status(200).json({
            message : "Updated successfully"
        })
    }
    else{
        return res.status(411).json({
            message : "Error while updating information"
        })
    }
})

router.get("/bulk", authMiddleware, async (req, res) => {
    const filter = req.query.filter || ""
    const response = await User.find({
        $or: [
                {
                    firstName : {
                    $regex: filter
                    }
                },
                {
                    lastName : {
                    $regex : filter
                    }
                }
        ]
    })
    return res.status(200).json({
        users : response.map((item) => {
            return {
                firstName : item.firstName,
                lastName : item.lastName,
                _id : item._id,
                userName : item.userName
            }
        })
    })
})

router.get("/me", authMiddleware, async (req, res) => {
    const userDetail = await User.findOne({_id : req.userId})
    return res.status(200).json({
        message : "Backend is healthy",
        name : userDetail.firstName,
        id : req.userId
    })
})



module.exports = router