import { useState } from "react"
import { Modal } from "./Modal"

export function App() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="container">
            <h1>React createPortal Demo</h1>
            <p>
                <code>createPortal</code>{" "}
                を使用すると、DOMツリーの別の場所にコンポーネントをレンダリングできます。
            </p>
            <p>モーダルは親コンポーネントの外（#modal-root）にレンダリングされます。</p>

            <button type="button" onClick={() => setIsOpen(true)}>
                モーダルを開く
            </button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h2>Portal で表示されたモーダル</h2>
                <p>
                    このモーダルは <code>#modal-root</code> にレンダリングされています。
                </p>
                <p>DevToolsで確認してみてください。</p>
            </Modal>

            <div className="code-section">
                <h3>使い方</h3>
                <pre>
                    <code>{`import { createPortal } from 'react-dom'

createPortal(children, domNode)`}</code>
                </pre>
            </div>
        </div>
    )
}
