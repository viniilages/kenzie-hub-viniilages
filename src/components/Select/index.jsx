import { forwardRef } from "react"
import styles from "./style.module.scss"

export const Select = forwardRef(({ children, label, errors, ...rest }, ref) => {
    return (
        <div>
            <label>
                {label}
                <select ref={ref} {...rest}> {children} </select>
                {errors ? <p className={styles.pError}>{errors.message}</p> : null}
            </label>
        </div>
    )
}) 

