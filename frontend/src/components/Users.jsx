import { Link } from "react-router-dom"

const Users = () => {
    return <div className="p-2">
        <div className="text-1xl font-semibold">Users</div>
        <input type="text" placeholder="Search Users..." className="border rounded-md p-2 py-1 mt-2 w-full text-sm shadow-sm"></input>
        <div className="flex justify-between pt-3">
            <div><span className="rounded-full bg-green-500 px-2 py-1">N</span> Nikhil Chandrakar</div>
            <div className="bg-black rounded-sm text-white text-xs p-1 cursor-pointer"><Link to="/send">Send Money</Link></div>
        </div>
    </div>
}

export { Users }