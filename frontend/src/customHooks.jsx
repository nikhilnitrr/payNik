import { useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const useHealthCheck = () => {
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/me", {
            headers : {
                Authorization : "Bearer " + localStorage.getItem("token")
            }
        })
        .then((response) => {
            if(response.status === 200){
                navigate("/dashboard")
            }
        })
    },[])
}

export {useHealthCheck}