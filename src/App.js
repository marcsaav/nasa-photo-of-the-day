import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from './Header'
import Info from './Info'
import "./App.css";

function App() {

  let  [ apod, setApod ] = useState({});

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=YqTLCNNVZiZ122woMHa33cDKJWcKAuWqcBThgwlJ`)
    .then((res) => {
      setApod(res.data)
    })
    .catch((err) => {
      debugger
    })
  }, [])

  return (
    <>
      <Header title={apod.title} img={apod.url} copyright={apod.copyright} date={apod.date} />
      <Info explanation={apod.explanation} />
    </>
  );
}

export default App;
