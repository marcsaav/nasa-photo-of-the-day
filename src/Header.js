import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@500&family=Ubuntu:ital,wght@1,500&display=swap');


    background-color: #002246;
    border: 0px;
    border-bottom: 4px solid;
    border-image: linear-gradient(to right, #242582, #0484FD);
    border-image-slice: 1;

    h1 {
        color: white;
        font-family: 'Sansita Swashed', cursive;

        &:hover {
            transform: scale(1.2);
            color: #F64C72;
        }
    }

    img {
        width: 50%;
        height: 50%;
        -webkit-filter: blur(3px);
        filter: blur(3px);
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out;

        &:hover {
            height:100%;
            width:80%;
            -webkit-filter: blur(0);
	        filter: blur(0);
        }
    }

    h2 {
        font-family: 'Ubuntu', sans-serif;
        display: table;
        white-space: nowrap;
        &:before, &:after {
        border-top: 1px solid #553D67;
        content: '';
        display: table-cell;
        position: relative;
        top: 0.5em;
        width: 45%;
        }
        &:before { right: 1.5%; }
        &:after { left: 1.5%; }
    }

    h3 {
        font-family: 'Ubuntu', sans-serif;
        display: table;
        white-space: nowrap;
        &:before, &:after {
        border-top: 1px solid #553D67;
        content: '';
        display: table-cell;
        position: relative;
        top: 0.5em;
        width: 45%;
        }
        &:before { right: 1.5%; }
        &:after { left: 1.5%; }
    }

`;


export default function Header(props) {
    let { title, img, copyright, date } = props;

    return(
        <StyledHeader className='App-header'>
            <h1>{title}</h1>
            <img src={img} alt={title} />
            <h2> &#169;{copyright}</h2>
            <h3> {date} </h3>
        </StyledHeader>
    )
}