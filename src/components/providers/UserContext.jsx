import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { api } from "../../api/api"



export const UserContext = createContext({})

export const UserProvider = ({ children }) => {

    const navigate = useNavigate()

    const [techReading, setTechReading] = useState([])

    const [user, setUser] = useState()

    const registerSubmit = async (formData) => {

        try {
            toast.success("Conta criada com sucesso!", { theme: "#343B41" })
            const post = await api.post("/users", formData)
            navigate("/")

        } catch (error) {
            console.log(error)
        }

    }

    const loginSubmit = async (formData) => {
        const { data } = await api.post("sessions", formData)
        localStorage.setItem("userToken", data.token)
        setUser(data.user)
        setTechReading(data.user.techs)
        if (data) {
            return navigate("/home")
        }

    }

    const logout = () => {
        localStorage.removeItem("userToken")
        setUser("")
        navigate("/")
    }

    useEffect(() => {
        const autoLogin = async () => {
            const token = localStorage.getItem("userToken")
            try {
                if (token) {
                    const { data } = await api.get("/profile", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    console.log(data)
                    setUser(data)
                    setTechReading(data.techs)
                    navigate("/home")
                }
            } catch (error) {
                console.log(error)
            }
        }
        autoLogin()
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser, loginSubmit, registerSubmit, logout, techReading, setTechReading}}>
            {children}
        </UserContext.Provider>
    )
}