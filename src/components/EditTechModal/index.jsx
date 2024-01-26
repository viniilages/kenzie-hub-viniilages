import { useContext } from "react"
import { useForm } from "react-hook-form"
import { TechContext } from "../../providers/TechContext"
import { Input } from "../Input"
import { Select } from "../Select"
import styles from "./style.module.scss"

export const EditTechModal = () => {

    const { register, handleSubmit } = useForm()
    const { editingTech, setEditingTech, submitEditTech } = useContext(TechContext)

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.divContainer}>
                <div className={styles.div}>
                    <h3>Tecnologia Detalhes</h3>
                    <button onClick={() => { setEditingTech(false) }}>X</button>
                </div>
                <form className={styles.form} onSubmit={handleSubmit(submitEditTech)}>
                    <Input className={styles.Input} type="text" label="Nome" value={editingTech.title} {...register("title")} />
                    <Select label="Status" defaultValue={editingTech.status} {...register("status")}>
                        <option value=""></option>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </Select>
                    <button type="submit">Salvar alterações</button>
                </form>
            </div>
        </div>
    )
}