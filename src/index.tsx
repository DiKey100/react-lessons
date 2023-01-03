import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
    return (
        <div>
            <h1>Hello React</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                repudiandae iusto tempore maxime molestias iure id officia odit
                perspiciatis adipisci, provident, nemo pariatur quisquam
                exercitationem fugit? Quia blanditiis incidunt explicabo.
            </p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
