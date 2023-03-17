import React from "react"
import Header from "./Header"
import Details from "./Details"
import Footer from "./Footer"
import styled from 'styled-components'
import { useGlobalContext } from "./context"
import DetailsStepThree from './details/DetailsStepThree';

const SlideThree = () => {

const { windowWidth} = useGlobalContext()

return (
  <>
    <Wrapper>
    <div className={` ${windowWidth < 768 ? '' : 'big-holder-container'}`}>
      <div className={` ${windowWidth < 768 ? '' : 'big-holder'}`}>
          <Header/>
    <div className={` ${windowWidth < 768 ? 'wrapper' : ''}`}>
      <div className={` ${windowWidth < 768 ? 'details' : 'big-wrapper'}`}>
        <DetailsStepThree/>
          <div className={` ${windowWidth < 768 ? 'no-footer' : 'big-footer'}`}>
          <Footer/>
        </div>
      </div>
    </div>
    <div className={` ${windowWidth < 768 ? 'footer' : 'no-footer'}`}>
      <Footer/>
    </div>
    </div>
    </div>
  </Wrapper>
  </>
  )
}

const Wrapper = styled.div`
top: 0;
left: 0; 
width: 100%;
height: 100vh;
transform: translateX(200%);
transition: all 0.3s linear;  
`

export default SlideThree