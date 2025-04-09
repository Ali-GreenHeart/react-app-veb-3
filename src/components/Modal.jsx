import React, { useState } from "react"
import "./modal.css";

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <button onClick={() => {
                setIsOpen(!isOpen)
            }}>
                Modal-i {isOpen ? "bagla" : "ac"}
            </button>
            {
                isOpen && <div className="modal">
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
