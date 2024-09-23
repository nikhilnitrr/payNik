import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useEffect } from "react"
import { balanceAtom } from "../store/atoms"
import { useRecoilState } from "recoil"
import { amountAtom } from "../store/atoms"
import axios from "axios"


export const Dashboard = () => {
    const [balance, setBalance] = useRecoilState(balanceAtom)

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/balance", {
            headers : {
                Authorization : "Bearer " + localStorage.getItem("token")
            }
        })
        .then((response) => {
            setBalance(response.data.balance)
        })
    },[amountAtom])
    return <div className="h-screen">
        <AppBar title="PayNik App" logo="N"/>
        <Balance balance={balance}/>
        <Users/>
    </div>
}