import React, { useState } from "react"
import styles from "./modal.module.css"

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false)
    console.log(styles.modal)
    return (
        <>
            <button onClick={() => {
                setIsOpen(!isOpen)
            }}>
                Modal-i {isOpen ? "bagla" : "ac"}
            </button>
            {
                isOpen && <div className={styles.modal}>
                    <h1>Modalin basligi
                        <button onClick={() => setIsOpen(false)}>X</button>
                    </h1>
                    <div>
                        <h4>modalin contenti</h4>
                    </div>
                </div>
            }
        </>
    )
}
export default Modal
