import type { ReactNode } from "react"
import { createPortal } from "react-dom"

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
    if (!isOpen) return null

    const modalRoot = document.getElementById("modal-root")
    if (!modalRoot) return null

    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button type="button" className="modal-close" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>,
        modalRoot
    )
}
