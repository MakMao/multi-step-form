import Header from './components/Header';
import Details from './components/Details';
import Footer from './components/Footer';
import styled from 'styled-components';
import SlideOne from './components/SlideOne';
import SlideTwo from './components/SlideTwo';
import SlideThree from './components/SlideThree';
import SlideFour from './components/SlideFour'
import React, {useState} from 'react';
import { useGlobalContext } from "./components/context"
import SlideFive from './components/SlideFive';


function App() {
const {index, indexje, setIndexje} = useGlobalContext()
  
  return (
    <Container>
      <div className="container">
        <div className="first"  style={{transform: `translateX(-${index}00%)`, transition: 'all 0.3s linear'}}>
          <SlideOne />
        </div>
        <div className="second" style={{transform: `translateX(-${index}00%)`, transition: 'all 0.3s linear'}}>
          <SlideTwo />
        </div>
        <div className="second" style={{transform: `translateX(-${index}00%)`, transition: 'all 0.3s linear'}}>
          <SlideThree />
        </div>
        <div className="second" style={{transform: `translateX(-${index}00%)`, transition: 'all 0.3s linear'}}>
          <SlideFour />
        </div>
        <div className="second" style={{transform: `translateX(-${index}00%)`, transition: 'all 0.3s linear'}}>
          <SlideFive />
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
/* transition: all 0.3s linear; */
/* border: 4px solid blue; */
overflow: hidden;
height: 100vh;
/* width: 900px; */
margin: 0 auto;
transition: all 1.3s linear;
/* border: 3px solid brown; */
/* .container {

} */

/* @media (min-width: 768px){
  .container {
    border: 23px solid pink;
    width: 1000px;
    margin: 0 auto;
  }
} */

/* max-width: 100vw; */
  /* margin: 0 auto; */
    /* position: relative; */
  /* overflow: hidden; */
  /* overflow: hidden;
  display: grid; */
  /* transform: translateX(50%); */






`


export default App
