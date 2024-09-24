import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

import { firstNameAtom, lastNameAtom, userNameAtom, passwordAtom } from "../store/atoms"
import {useRecoilState } from "recoil"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useHealthCheck } from "../customHooks"

export const Signup = () => {
    const [firstName, setFirstName] = useRecoilState(firstNameAtom)
    const [lastName, setLastName] = useRecoilState(lastNameAtom)
    const [userName, setUserName] = useRecoilState(userNameAtom)
    const [password, setPassword] = useRecoilState(passwordAtom)
    const navigate = useNavigate()

    // custom hook
    useHealthCheck()

    return (
        <div className="bg-slate-200 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded p-3 w-80 h-max bg-white">
                    <Heading title="Sign up" />
                    <SubHeading subheading="Enter your information to create an account" />
                    <InputBox onChange={(e) => {
                        setFirstName(e.target.value)
                    }} label="First Name" placeholder="John" />
                    <InputBox onChange={(e) => {
                        setLastName(e.target.value)
                    }} label="Last Name" placeholder="Doe" />
                    <InputBox onChange={(e) => {
                        setUserName(e.target.value)
                    }} label="Email" placeholder="nikhil@gmail.com" />
                    <InputBox onChange={(e) => {
                        setPassword(e.target.value)
                    }} label="Password" placeholder="123456" />
                    <Button onClick={async () => {
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                            userName,
                            firstName,
                            lastName,
                            password
                        })
                        localStorage.setItem("token", response.data.token)
                        navigate("/dashboard")
                    }} title="Sign up" />
                    <BottomWarning warningText="Already have an account ?" link="/signin" linkText="Sign in" />
                </div>

            </div>
        </div>
    )

}