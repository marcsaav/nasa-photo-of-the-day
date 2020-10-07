import React from 'react'


export default function Header(props) {
    let { title, img, copyright, date } = props;

    return(
        <div className='App-header'>
            <h1>{title}</h1>
            <img src={img} alt={title} />
            <p> &#169;{copyright}</p>
            <p> {date} </p>
        </div>
    )
}