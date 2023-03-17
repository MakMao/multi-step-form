import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Details from './Details'
import Footer from './Footer'
import DetailsStepFive from './details/DetailsStepFive'
import { useGlobalContext } from "./context"


const SlideFive = () => {

      const {handleOnclick,windowWidth} = useGlobalContext()

  return (
    <Container>
      <div className={` ${windowWidth < 768 ? '' : 'big-holder-container'}`}>
        <div className={` ${windowWidth < 768 ? '' : 'big-holder'}`}>
            <Header/>
      <div className="wrapper">
         <div className={` ${windowWidth < 768 ? 'details' : 'big-wrapper'}`}>
          <DetailsStepFive/>
          {/* <div className={` ${windowWidth < 768 ? 'no-footer' : 'big-footer'}`}>
            <Footer/>
          </div> */}
        </div>
      </div>
      </div>
            {/* <div className={` ${windowWidth < 768 ? 'footer' : 'no-footer'}`}>
        <Footer/>
      </div> */}
      </div>
    </Container>
  )
}

const Container = styled.div`
top: 0;
left: 0; 
width: 100%;
height: 100vh;
transform: translateX(400%);
transition: all 0.3s linear; 


`

export default SlideFive