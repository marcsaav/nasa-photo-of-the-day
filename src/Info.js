import React from 'react'
import styled from 'styled-components'

const StyledInfo = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Piazzolla&display=swap');

    @keyframes scale-in-center {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

    color: #CFECDA;
    margin: 0 15%;
    padding: 5%;
    text-align: center;

    p {
        font-family: 'Piazzolla', serif;
        font-size: 1.5rem;
        animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
`;


export default function Info(props) {
    let { explanation } = props

    return(
        <StyledInfo className='App'>
            <p className='scale-in-center'> {explanation} </p>
        </StyledInfo>
    )
}