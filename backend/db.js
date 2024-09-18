const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://nikhilchandrakar3:zp6Gl7Fa6umR8zo9@cluster0.igaufep.mongodb.net/paytm")

const UserSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    userName : {
        type : String,
        required : true
    }
})

const AccountSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    balance : {
        type : Number,
        required : true
    }
})

const User = mongoose.model("User", UserSchema)
const Account = mongoose.model("Account", AccountSchema)

module.exports = {User, Account}