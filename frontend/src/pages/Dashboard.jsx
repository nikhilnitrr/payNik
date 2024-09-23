import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"


export const Dashboard = () => {
    return <div className="h-screen">
        <AppBar title="PayNik App" logo="N"/>
        <Balance balance="10000"/>
        <Users/>
    </div>
}