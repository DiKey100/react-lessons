import React from 'react'
import ReactDOM from 'react-dom/client'

type TitleProps = {
    title: string | number
}

const Title = (props: TitleProps) => {
    return <h1>Hello {props.title}</h1>
}
const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore magni laboriosam cum, id praesentium est doloremque
                nemo corrupti. Sit, rerum veniam quas quae nesciunt placeat
                doloremque! Mollitia nesciunt nemo labore? Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Nobis neque deleniti
                ratione alias consequuntur incidunt ipsum in veniam ab quisquam
                quas rerum odit quaerat sed, est sunt ipsa minima eius!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore magni laboriosam cum, id praesentium est doloremque
                nemo corrupti. Sit, rerum veniam quas quae nesciunt placeat
                doloremque! Mollitia nesciunt nemo labore? Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Nobis neque deleniti
                ratione alias consequuntur incidunt ipsum in veniam ab quisquam
                quas rerum odit quaerat sed, est sunt ipsa minima eius!
            </p>
        </React.Fragment>
    )
}
const App = () => {
    return (
        <>
            <Title title="React" />
            <Title title="TS" />
            <Title title="JS" />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
