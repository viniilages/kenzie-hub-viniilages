import { useForm } from "react-hook-form"
import { Input } from "../../components/Input"
import { Link } from "react-router-dom"
import styles from "./style.module.sass"
import { useContext } from "react"
import { UserContext } from "../../components/providers/UserContext"

export const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()


    const { loginSubmit } = useContext(UserContext)


    return (
        <>
            <header className={styles.header}>
                <img src="./assets/img/Logo.svg" alt="Logo Kenzie Hub" />
            </header>

            <main className={styles.main}>
                <h1>Login</h1>
                <form onSubmit={handleSubmit(loginSubmit)}>
                    <Input type="email" label="Email" errors={errors.email} {...register("email")} />
                    <Input type="password" label="Senha" errors={errors.password} {...register("password")} />
                    <button className={styles.buttonLogin} type="submit">Entrar</button>
                </form>
                <p>Ainda não possui uma conta?</p>
                <Link className={styles.buttonRegister} to={"/register"}>Cadastre-se</Link>
            </main>
        </>
    )
}