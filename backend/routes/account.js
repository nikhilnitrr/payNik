const {Router} = require("express")
const {authMiddleware} = require("../middleware")
const {Account} = require("../db")
const {validateTransferSchema} = require("../types")
const { default: mongoose } = require("mongoose")
const router = Router()

router.get("/balance", authMiddleware, async (req, res) => {
    const userId = req.userId
    const existingAccount = await Account.findOne({
        userId : userId
    })
    return res.status(200).json({
        balance : existingAccount.balance
    })
})

router.post("/transfer", authMiddleware, async (req, res) => {
    const {success} = validateTransferSchema.safeParse(req.body)
    const from = req.userId
    if(success){
        // start session
        const session = await mongoose.startSession()

        // wrap everything inside a transaction

        // 1: Start the transaction
        session.startTransaction()
        const {to, amount} = req.body

        // 2: Get sender Account details
        const fromAccount = await Account.findOne({
            userId : from
        }).session(session)
        if(! fromAccount){
            await session.abortTransaction()
            return res.status(400).json({
                message : "Invalid account"
            })
        }
        else if(fromAccount.balance < amount){
            await session.abortTransaction()
            return res.status(400).json({
                message : "Insufficient balance"
            })
        }

        // 3: Get receiver Account details
        const toAccount = await Account.findOne({
            userId : to
        }).session(session)
        if(! toAccount){
            await session.abortTransaction()
            return res.status(400).json({
                message : "Invalid account"
            })
        }

        // update the balance
        await Account.updateOne({
            userId : from
        },
        {
            $inc : {balance : -amount}
        }).session(session)

        await Account.updateOne({
            userId : to
        },
        {
            $inc : {balance : amount}
        }).session(session)

        // commit the transaction
        await session.commitTransaction()

        return res.status(200).json({
            message : "Transfer completed"
        })

    }
    else{
        return res.status(400).json({
            message : "Invalid account"
        })
    }
})

module.exports = router