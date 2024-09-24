import { useEffect, useState } from "react"
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

const useDebounce = (inputValue, timeout) => {
    const [debouncedValue, setDebouncedValue] = useState(inputValue)
    useEffect(() => {
        const value = setTimeout(() => {
            setDebouncedValue(inputValue)
        }, timeout)
        return () => {
            clearInterval(value)
        }
    },[inputValue, timeout])
    return debouncedValue
}

export {useHealthCheck, useDebounce}