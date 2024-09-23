import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"


export const Signin = () => {
    return (
        <div className="bg-slate-200 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded p-3 w-80 h-max bg-white">
                    <Heading title="Sign In" />
                    <SubHeading subheading="Enter your credentials to access your account" />
                    <InputBox label="Email" placeholder="nik@gmail.com" />
                    <InputBox label="Password" />
                    <Button title="Sign In" />
                    <BottomWarning warningText="Don't have an account?" link="/signup" linkText="Sign Up" />
                </div>
            </div>
        </div>
    )
}