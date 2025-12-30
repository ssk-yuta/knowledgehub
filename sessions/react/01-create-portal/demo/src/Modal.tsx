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
        <div className="modal-overlay" role="dialog" aria-modal="true">
            <button
                type="button"
                className="modal-backdrop"
                onClick={onClose}
                aria-label="モーダルを閉じる"
            />
            <div className="modal-content">
                <button type="button" className="modal-close" onClick={onClose} aria-label="閉じる">
                    &times;
                </button>
                {children}
            </div>
        </div>,
        modalRoot
    )
}
