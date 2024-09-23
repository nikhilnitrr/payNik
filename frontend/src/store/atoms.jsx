import {atom} from "recoil"

export const firstNameAtom = atom({
    key : "firstNameAtom",
    default : ""
})

export const lastNameAtom = atom({
    key : "lastNameAtom",
    default : ""
})

export const userNameAtom = atom({
    key : "userNameAtom",
    default: ""
})

export const passwordAtom = atom({
    key : "passwordAtom",
    default : ""
})

export const signinUserNameAtom = atom({
    key : "signinUserNameAtom",
    default : ""
})

export const signinPasswordAtom = atom({
    key : "signinPasswordAtom",
    default : ""
})

export const filterAtom = atom({
    key : "filterAtom",
    default : ""
})

export const usersAtom = atom({
    key : "usersAtom",
    default : []
})

export const balanceAtom = atom({
    key : "balanceAtom",
    default : 0
})

export const amountAtom = atom({
    key : "amountAtom",
    default : ""
})

export const idAtom = atom({
    key : "idAtom",
    default : ""
})