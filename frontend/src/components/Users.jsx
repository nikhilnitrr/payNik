import { Link } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { filterAtom, usersAtom, idAtom } from "../store/atoms"
import { useRecoilState, useRecoilValue } from "recoil"
import { useDebounce } from "../customHooks"


const Users = () => {
    const [filter, setFilter] = useRecoilState(filterAtom)
    const [users, setUsers] = useRecoilState(usersAtom)
    const id = useRecoilValue(idAtom)
    const debouncedFilterValue = useDebounce(filter, 500)
    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${debouncedFilterValue}`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then((response) => {
                setUsers(response.data.users)
            })
    }, [debouncedFilterValue])
    return <div className="p-2">
        <div className="text-1xl font-semibold">Users</div>
        <input onChange={(e) => {
            setFilter(e.target.value)
        }} type="text" placeholder="Search Users..." className="border rounded-md p-2 py-1 mt-2 w-full text-sm shadow-sm"></input>
        {
            users.filter((item) => {
                return item._id != id
            }).map((user) => {
                return <div key={user._id} className="flex justify-between pt-3">
                    <div><span className="rounded-full bg-green-500 px-2 py-1">{user.firstName[0].toUpperCase()}</span>{" " + user.firstName + " " + user.lastName}</div>
                    <div className="bg-black rounded-sm text-white text-xs p-1 cursor-pointer"><Link to={`/send/${user.firstName}/${user.lastName}/${user._id}`} name="nikhil">Send Money</Link></div>
                </div>
            })
        }
    </div>
}

export { Users }