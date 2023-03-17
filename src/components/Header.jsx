import React from 'react'
import styled from 'styled-components'
import desktopImg from '../assets/images/bg-sidebar-mobile.svg'
import desktopBigIm from '../assets/images/bg-sidebar-desktop.svg'
import { useGlobalContext } from './context'

const Header = () => {
  const {index, windowWidth} = useGlobalContext()
  return (
    <Container>
      {windowWidth < 768 ?
        <div className="container">
          <div className="img-container">
            <img src={desktopImg} alt=""  className="img"/>
          </div>
        <div className="button-container">
          <button className={`${index === 0 ? 'btn-header active' :'btn-header'}`}>1</button>
          <button className={`${index === 1 ? 'btn-header active' :'btn-header'}`}>2</button>
          <button className={`${index === 2 ? 'btn-header active' :'btn-header'}`}>3</button>
          <button className={`${index === 3 || index === 4 ? 'btn-header active' :'btn-header'}`}>4</button>
        </div>
      </div> 
      : 
          <div className="big-container" style={{backgroundImage: `url(${desktopBigIm})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '8px'}}>
          {/* <img src={desktopBigIm} alt="" className="bit-image" /> */}
          
          <div className="big-button-container">
            <div className="big-step-one">
              <div className="big-first">
                <button className={`${index === 0 ? 'big-btn-header active' :'big-btn-header'}`}>1</button>
              </div>
              <div className="big-second">
                <p className="big-step">STEP 1</p>
                <p>YOUR INFO</p>
              </div>
            </div>
            <div className="big-step-one">
              <div className="big-first">
                <button className={`${index === 1 ? 'big-btn-header active' :'big-btn-header'}`}>2</button>
              </div>
              <div className="big-second">
                <p className="big-step">STEP 2</p>
                <p>SELECT PLAN</p>
              </div>
            </div>
            <div className="big-step-one">
              <div className="big-first">
                <button className={`${index === 2 ? 'big-btn-header active' :'big-btn-header'}`}>3</button>
              </div>
              <div className="big-second">
                <p className="big-step">STEP 3</p>
                <p>ADD-ONS</p>
              </div>
            </div>
            <div className="big-step-one">
              <div className="big-first">
                <button className={`${index === 3 ? 'big-btn-header active' :'big-btn-header'}`}>4</button>
              </div>
              <div className="big-second">
                <p className="big-step">STEP 4</p>
                <p>SUMMARY</p>
              </div>
            </div>
          </div>
        </div>
      }


    </Container>
  )
}

const Container = styled.div`
/* background-color: pink; */
/* border: 2px solid red;  */
width: 275px;

.img-container {
  max-height: 200px;
  width: 100vw;
  overflow: hidden;
}

.big-button-container {
  padding: 2em 0 0 1em;
}

.big-container {
  margin: 0 auto;
  height: 100%;
}


.big-step-one {
  display: flex;
  align-items: center;
  margin-bottom: 1.5em;
  column-gap: 0.6em;
}



.big-second > * {
  color: var(--clr-magnolia);
}

.big-step {
  font-weight: 400 ; 
  font-size: 0.75rem;
  opacity: 0.6;
}
.container {
  position: relative;
}

.img{
  width: 100vw;
  /* max-height: 170px; */
  object-fit: cover;
}

.button-container{ 
  height: 40px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: green; */
  position: absolute;
  z-index: 44;
  top: 30px;
}

.btn-header,
 .big-btn-header{
  margin: 0.6em;
  width: 32px;
  height: 32px;
  border: 1px solid var(--clr-light-blue);
  border-radius: 50%;
  background: transparent;
  font-weight: 700;
  color: var(--clr-alabaster);
}

.active {
  background: var(--clr-light-blue) ;
  color: var(--clr-marine-blue);
}

.btn-header:hover{
  cursor: pointer;
}
`

export default Header