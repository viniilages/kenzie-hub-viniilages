import styles from "./style.module.scss"
import { useContext } from "react"
import { UserContext } from "../../components/providers/UserContext"
import { TechContext } from "../../components/providers/TechContext"
import { CreateTechModal } from "../../components/CreateTechModal"
import { TechList } from "../../components/TechList"
import { EditTechModal } from "../../components/EditTechModal"
import buttonPlusLogo from "/public/assets/img/Button Plus.svg"
export const Home = () => {

    const { logout, user } = useContext(UserContext)

    const { createModal, setCreateModal, editingTech, techReading} = useContext(TechContext)





    return (
        <>
            <header className={styles.header}>
                <div className={styles.containerHeader}>
                    <img src="./assets/img/Logo.svg" alt="Logo Kenzie Hub" />
                    <button className={styles.buttonLogout} onClick={logout}>Sair</button>
                </div>
            </header>

            <main className={styles.main}>
                <div className={styles.containerUser}>
                    <div className={styles.user}>
                        <h1>Olá, {user.name}</h1>
                        <p className={styles.pGrey}>Primeiro módulo (introdução ao Frontend)</p>
                    </div>
                </div>

                <div className={styles.techOpenModal}>
                    <h1>Tecnologias</h1>
                    <button onClick={() => { setCreateModal(true) }}> <img src={buttonPlusLogo} alt="Button Plus" /> </button>
                </div>


                {techReading.length > 0 ? <TechList /> : null}
                
                {editingTech ? <EditTechModal/> : null}
                {createModal ? <CreateTechModal /> : null}
            </main>
        </>
    )
}