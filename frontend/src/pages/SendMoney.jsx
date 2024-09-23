import { useParams } from "react-router"
import { amountAtom } from "../store/atoms"
import { useRecoilState } from "recoil"
import axios from "axios"
import { useState } from "react"

export const SendMoney = () => {
    const {firstName, lastName, id} = useParams()
    const [amount, setAmount] = useRecoilState(amountAtom)
    const [state, setState] = useState(0)
    return <div className="h-screen flex justify-center bg-slate-200">
        <div className="flex flex-col justify-center">
            <div className="w-80 border rounded p-3 shadow-sm bg-white">
                <div className="text-center text-3xl font-bold mb-10">Send Money</div>
                <div className="font-bold px-2 mt-2"><span className="text-white bg-green-500 rounded-full px-2 py-1">{firstName[0].toUpperCase()}</span>{" " + firstName + " " + lastName}</div>
                <div className="p-2 mt-5 mb-5">
                    <div>Amount (in Rs)</div>
                    <input onChange={(e) => {
                        setAmount(e.target.value)
                    }} type="text" placeholder="Enter amount" className="w-full border rounded-sm text-sm p-2"></input>
                </div>
                <div onClick={async () => {
                    setState(1)
                    const response = await axios.post("http://localhost:3000/api/v1/account/transfer", {
                        to : id,
                        amount : parseFloat(amount)
                    }, {
                        headers : {
                            Authorization : "Bearer " + localStorage.getItem("token")
                        }
                    })
                    setState(2)
                    setTimeout(() => {
                        setState(0)
                    }, 2000)
                }} className="cursor-pointer text-white bg-black text-md text-center rounded-md p-2 mx-1 m-5">{state == 0 ? "Initiate Transfer" : state == 1 ? "Loading..." : state == 2 ? "Transfer completed" : null}</div>
            </div>
        </div>
    </div>
}