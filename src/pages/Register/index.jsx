import { useForm } from "react-hook-form"
import { registerSchema } from "../../schemes/registerSchema"
import { Input } from "../../components/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router-dom"
import styles from "./style.module.sass"
import { Select } from "../../components/Select"
import { toast } from "react-toastify"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useContext } from "react"
import { UserContext } from "../../components/providers/UserContext"



export const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema)
    })

    const { registerSubmit } = useContext(UserContext)


    return (
        <>
            <header className={styles.header}>
                <img src="./assets/img/Logo.svg" alt="Logo Kenzie Hub" />
                <Link to={"/"} >Voltar</Link>
            </header>

            <main className={styles.registerMain}>
                <h1>Crie sua conta</h1>
                <p className={styles.subtitle}>Rapido e grátis, vamos nessa</p>
                <form onSubmit={handleSubmit(registerSubmit)}>
                    <Input type="text" label="Nome" placeholder="Digite aqui seu nome" errors={errors.name} {...register("name")} />
                    <Input type="email" label="Email" placeholder="Digite aqui seu email" errors={errors.email} {...register("email")} />
                    <Input type="password" label="Senha" placeholder="Digite aqui seu senha" errors={errors.password} {...register("password")} />
                    <Input type="password" label="Confirmar Senha" placeholder="Digite novamente sua senha" errors={errors.confirmPassword} {...register("confirmPassword")} />
                    <Input type="text" label="Bio" placeholder="Fale sobre você" errors={errors.bio} {...register("bio")} />
                    <Input type="text" label="Contato" placeholder="Opção de contato" errors={errors.contact} {...register("contact")} />
                    <Select className={styles.select} id="selectModule" label="Selecionar módulo" errors={errors.course_module} {...register("course_module")}>
                        <option value=""></option>
                        <option value="Primeiro Módulo">Primeiro Módulo</option>
                        <option value="Segundo Módulo">Segundo Módulo</option>
                        <option value="Terceiro Módulo">Terceiro Módulo</option>
                        <option value="Quarto Módulo">Quarto Módulo</option>
                        <option value="Quinto Módulo">Quinto Módulo</option>
                    </Select>
                    <button className={styles.buttonRegister} onClick={() => {
                        if (Object.values(errors).length > 0) {
                            toast.error("Ops! Algo deu errado", { theme: "#343B41" })
                        }
                    }} type="submit">Cadastrar</button>
                </form>
            </main>
            <ToastContainer />
        </>
    )
}

