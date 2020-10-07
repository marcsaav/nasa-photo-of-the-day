import React from 'react'

export default function Info(props) {
    let { explanation } = props

    return(
        <div className='App'>
            <p> {explanation} </p>
        </div>
    )
}