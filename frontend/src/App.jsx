import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard"
import { SendMoney } from "./pages/SendMoney"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { useEffect } from "react"
import axios from "axios"
import {RecoilRoot} from "recoil"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<RecoilRoot><Signup /></RecoilRoot>} />
        <Route path="/signin" element={<RecoilRoot><Signin /></RecoilRoot>} />
        <Route path="/dashboard" element={<RecoilRoot><Dashboard/></RecoilRoot>} />
        <Route path="/send/:firstName/:lastName/:id" element={<RecoilRoot><SendMoney/></RecoilRoot>} />
        <Route path="/" element={<RecoilRoot><Signup /></RecoilRoot>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
