import React from "react"
import Header from "./Header"
import styled from 'styled-components'
import { useGlobalContext } from "./context"
import DetailsStepOne from "./details/DetailsStepOne"
import Footer from "./Footer"

const SlideOne = () => {

const {windowWidth} = useGlobalContext()

  return (
    <>
    <Wrapper>
      <div className={` ${windowWidth < 768 ? '' : 'big-holder-container'}`}>
        <div className={` ${windowWidth < 768 ? '' : 'big-holder'}`}>
       <Header/>
      <div className="wrapper">
        <div className={` ${windowWidth < 768 ? 'details' : 'big-wrapper'}`}>
          <DetailsStepOne/>
          <div className={` ${windowWidth < 768 ? 'no-footer' : 'big-footer'}`}>
            <Footer/>
          </div>
        </div>
      </div>
      </div>
    </div>
    </Wrapper>
    </>

  )
}

const Wrapper = styled.div`
position: relative;
width: 100vw;
height: 100vh;
transition: all 0.3s linear;
`

export default SlideOne