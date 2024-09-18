const zod = require("zod")

const validateUserSchema = zod.object({
    userName : zod.string().email(),
    password : zod.string().min(8),
    firstName : zod.string(),
    lastName : zod.string()
})

const validateUserUpdateSchema = zod.object({
    password : zod.string().optional(),
    firstName : zod.string().optional(),
    lastName : zod.string().optional()
})

const validateSigninSchema = zod.object({
    userName : zod.string().email(),
    password : zod.string().min(8)
})

const validateTransferSchema = zod.object({
    to : zod.string(),
    amount : zod.number()
})

module.exports = {validateUserSchema, validateUserUpdateSchema, validateSigninSchema, validateTransferSchema}