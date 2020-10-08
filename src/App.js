import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from './Header';
import Info from './Info';
import styled from 'styled-components'
import "./App.css";

const API_KEY = 'YqTLCNNVZiZ122woMHa33cDKJWcKAuWqcBThgwlJ';
const BASE_URL = 'https://api.nasa.gov/planetary/apod?api_key=';


const StyledApp = styled.div`
  background-color: #204B77;
`;


function App() {

  let  [ apod, setApod ] = useState({});

  useEffect(() => {
    axios.get(`${BASE_URL}${API_KEY}`)
    .then((res) => {
      setApod(res.data)
    })
    .catch((err) => {
      debugger
    })
  }, [])

  return (
    <StyledApp>
      <Header title={apod.title} img={apod.url} copyright={apod.copyright} date={apod.date} />
      <Info explanation={apod.explanation} />
    </StyledApp>
  );
}

export default App;
