import React from 'react'

const Card = ({ message }) => {
    return (
        <div><strong>Card:</strong>
            <br />
            <em>{message}</em>
        </div>
    )
}

export default Card