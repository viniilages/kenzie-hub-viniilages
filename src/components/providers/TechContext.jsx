import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { api } from "../../api/api";

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {

    const { techReading, setTechReading } = useContext(UserContext)

    const [createModal, setCreateModal] = useState(false)

    const [editingTech, setEditingTech] = useState()

    const submitEditTech = async (formData) => {
        const token = localStorage.getItem("userToken")
        const {data} = await api.put(`/users/techs/${editingTech.id}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if (data) {
            const techFilter = techReading.filter(tech => tech.id !== editingTech.id)

            setTechReading([...techFilter, data])
        }
        console.log(data)
    }

    const deleteTech = async (idTech) => {
        try {
            const token = localStorage.getItem("userToken")
            const response = await api.delete(`/users/techs/${idTech}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (response) {
                const techFilter = techReading.filter(tech => tech.id !== idTech)
                setTechReading(techFilter)
            }
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    const submitCreateTech = async (formData) => {
        try {
            const token = localStorage.getItem("userToken")
            const { data } = await api.post("/users/techs/", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (data) {
                setTechReading([...techReading, data])
                console.log(techReading)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TechContext.Provider value={{ createModal, setCreateModal, submitCreateTech, techReading, deleteTech, editingTech, setEditingTech, submitEditTech }}>
            {children}
        </TechContext.Provider>
    )
}