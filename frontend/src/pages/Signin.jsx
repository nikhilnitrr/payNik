import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import {useRecoilState} from "recoil"
import { signinPasswordAtom, signinUserNameAtom } from "../store/atoms"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useHealthCheck } from "../customHooks"


export const Signin = () => {
    const [userName, setUserName] = useRecoilState(signinUserNameAtom)
    const [password, setPassword] = useRecoilState(signinPasswordAtom)
    const navigate = useNavigate()

    // custom hook
    useHealthCheck()

    return (
        <div className="bg-slate-200 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded p-3 w-80 h-max bg-white">
                    <Heading title="Sign In" />
                    <SubHeading subheading="Enter your credentials to access your account" />
                    <InputBox onChange={(e) => {
                        setUserName(e.target.value)
                    }} label="Email" placeholder="nik@gmail.com" />
                    <InputBox onChange={(e) => {
                        setPassword(e.target.value)
                    }} label="Password" placeholder="123456"/>
                    <Button onClick={async () => {
                        const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                            userName,
                            password
                        })
                        localStorage.setItem("token", response.data.token)
                        navigate("/dashboard")
                    }} title="Sign In" />
                    <BottomWarning warningText="Don't have an account?" link="/signup" linkText="Sign Up" />
                </div>
            </div>
        </div>
    )
}