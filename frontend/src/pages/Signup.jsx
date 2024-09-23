import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signup = () => {
    return (
        <div className="bg-slate-200 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded p-3 w-80 h-max bg-white">
                    <Heading title="Sign up" />
                    <SubHeading subheading="Enter your information to create an account" />
                    <InputBox label="First Name" placeholder="John" />
                    <InputBox label="Last Name" placeholder="Doe" />
                    <InputBox label="Email" placeholder="nikhil@gmail.com" />
                    <InputBox label="Password" placeholder="123456" />
                    <Button title="Sign up" />
                    <BottomWarning warningText="Already have an account ?" link="/signin" linkText="Sign in" />
                </div>

            </div>
        </div>
    )

}