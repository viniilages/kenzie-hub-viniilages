import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { Select } from "../Select"
import { useContext } from "react"
import { TechContext } from "../providers/TechContext"
import styles from "./style.module.scss"

export const CreateTechModal = () => {

    const { register, handleSubmit } = useForm()

    const { setCreateModal, submitCreateTech } = useContext(TechContext)



    return (

        <div className={styles.modalOverlay}>
            <div className={styles.divContainer}>
                <div className={styles.div}>
                    <h3>Cadastrar Tecnologia</h3>
                    <button onClick={() => { setCreateModal(false) }}>X</button>
                </div>
                <form className={styles.form} onSubmit={handleSubmit(submitCreateTech)}>
                    <Input type="text" className={styles.Input} label="Nome" {...register("title")} />
                    <Select label="Selecionar status" {...register("status")}>
                        <option value=""></option>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </Select>
                    <button type="submit">Cadastrar Tecnologia</button>
                </form>
            </div>
        </div>
    )
}