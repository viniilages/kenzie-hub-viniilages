import { forwardRef } from "react"
import styles from "./style.module.scss"

export const Input = forwardRef(({ label, errors, ...rest }, ref) => {
    return (
        <div>
            <label>
                {label}
                <input ref={ref} {...rest} />
                {errors ? <p className={styles.pError}>{errors.message}</p> : null}
            </label>
        </div>
    )
}) 