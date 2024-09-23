import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useEffect } from "react"
import { balanceAtom } from "../store/atoms"
import { useRecoilState, useSetRecoilState } from "recoil"
import { amountAtom } from "../store/atoms"
import { useNavigate } from "react-router-dom"
import {useState} from "react"
import axios from "axios"
import { idAtom } from "../store/atoms"


export const Dashboard = () => {
    const [balance, setBalance] = useRecoilState(balanceAtom)
    const [name, setName] = useState("A")
    const navigate = useNavigate()
    const setId = useSetRecoilState(idAtom)

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/me", {
            headers : {
                Authorization : "Bearer " + localStorage.getItem("token")
            }
        })
        .then((response) => {
            if(response.status === 200){
                setName(response.data.name)
                setId(response.data.id)
            }
        })
        .catch(() => {
            navigate("/signup")
        })
    },[])

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
        <AppBar title="PayNik App" logo={name[0].toUpperCase()}/>
        <Balance balance={balance}/>
        <Users/>
    </div>
}