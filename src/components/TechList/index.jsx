import { useContext } from "react"
import { TechContext } from "../providers/TechContext"
import styles from "./style.module.scss"
import buttonEditLogo from "/public/assets/img/Button Edit.svg"
import buttonDeleteLogo from "/public/assets/img/Button Delete.svg"

export const TechList = () => {

    const { techReading, deleteTech, setEditingTech } = useContext(TechContext)




    return (

        <ul className={styles.list}>
            {techReading.map(tech => (
                <li className={styles.card} key={tech.id}>
                    <h1>{tech.title}</h1>
                    <div className={styles.editCard}>
                        <p>{tech.status}</p>
                        <div className={styles.divButtons}>
                            <button className={styles.editButton} onClick={() => { setEditingTech(tech) }}> <img src={buttonEditLogo} alt="Button Edit" /> </button>
                            <button className={styles.deleteButton} onClick={() => { deleteTech(tech.id) }}> <img src={buttonDeleteLogo} alt="Button Delete" /> </button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>

    )
}