import React from 'react'
import CardList from './containers/CardList'

const App = () => {
    const names = [
        "lio",
        "dima",
        "dibu",
        "depa"
    ]
    return (
        <>
            <h1>
                hola!
            </h1>
            <CardList namesList={names} />
        </>
    )
}

export default App