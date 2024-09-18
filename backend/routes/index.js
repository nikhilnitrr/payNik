// imports
const {Router} = require("express")
const userRouter = require("./user")
const accountRouter = require("./account")
const router = Router()

// middlewares
router.use("/user", userRouter)
router.use("/account", accountRouter)

// export the router
module.exports = router