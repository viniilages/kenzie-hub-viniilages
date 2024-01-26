import { Route, Routes } from "react-router-dom"
import { Home } from "../../pages/Home"
import { Login } from "../../pages/Login"
import { Register } from "../../pages/Register"
import { ProtectedRoutes } from "../ProtectedRoutes"

export const RoutesMain = () => {


    return (
        <Routes>
            <Route path="/home" element={<ProtectedRoutes/>}>
                <Route index element={<Home />} />
            </Route>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}