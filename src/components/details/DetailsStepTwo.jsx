import React, {useEffect, useState} from 'react'
import icon1 from '../../assets/images/icon-arcade.svg'
import icon2 from '../../assets/images/icon-advanced.svg'
import icon3 from '../../assets/images/icon-pro.svg'
import { useGlobalContext } from '../context'
import styled from 'styled-components'

const DetailsStepTwo = () => {

const {monthly, setMonthly, active, setActive, handleState} = useGlobalContext()
const [_, setIsChecked] = useState(true);

useEffect(() => {
  handleState()
}, [active, monthly])
  
return (
  <Container>
    <div className="main">
      <h2>Select your plan</h2>
      <p className="info">You have the option of monthly or yearly billing</p>
      <div className="option-container">
        <div className={active === 0 ? 'option active' : 'option'}onClick={ () => setActive(0)}>
          <img src={icon1} alt="image of icon" className="img-option" />
          <div>
            <h3 >Arcade</h3>
            {monthly ? <p className="price-text">$9/mo</p> : <p className="price-text">$90/yr</p> }
          </div>
        </div>
        <div className={active === 1 ? 'option active' : 'option'}onClick={ () => setActive(1)}>
          <img src={icon2} alt="image of icon" className="img-option" />
          <div>
            <h3>Adcanced</h3>
            {monthly ? <p className="price-text">$12/mo</p> : <p className="price-text">$120/yr</p> }
          </div>
        </div>
        <div className={active === 2 ? 'option active' : 'option'}onClick={ () => setActive(2)}>
          <img src={icon3} alt="image of icon" className="img-option" />
          <div>
            <h3>Pro</h3>
            {monthly ? <p className="price-text">$15/mo</p> : <p className="price-text">$150/yr</p> }
          </div>
        </div>
      </div>
        <div className="toggle-container">
          <button className={monthly ? "toggle-switch__cycle active-btn" : "toggle-switch__cycle" } onClick={() => setMonthly(true)}>Monthly</button>
         <span>
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          checked={monthly}
          onChange={() => setMonthly(!monthly)}
          />
        <label  htmlFor="toggle" onClick={() => setIsChecked(!monthly)}>
          <div className={monthly ? 'ball is-checked' : 'ball is-not-checked'}></div>
        </label>
        </span>
        <button className={!monthly ? "toggle-switch__cycle active-btn" : "toggle-switch__cycle" } onClick={() => setMonthly(false)}>Yearly</button>
      </div>
    </div>
  </Container>
  )
}

const Container = styled.div`
margin: 0 0 ;

.info {
  margin: 1em 0;
}
.option {
  border: 1px solid var(--clr-light-gray);
  margin: 0.6em 0;
  border-radius: 7px;
  padding: 0.5em;
  display: flex; 
  align-items: center; 
  column-gap: 0.5em;
  cursor: pointer;
  transition: 0.15s;
} 

.option:hover {
  border: 1px solid var(--clr-purplish-blue);
}

.active {
  border: 1px solid var(--clr-purplish-blue);
  background: rgba(71, 61, 255, 0.07);
}

.price-text {
  font-size: 0.875rem;
}

h3 {
  font-size: 15px; 
}

.img-option {
  margin-right: 0.5em;
}

@media (min-width: 768px) {
  .option-container {
    display: flex;
    column-gap: 1em;
  }
  .option {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    height: 140px;
  }
  .img-option {
    margin-bottom: 2.5em;
  }
}

`


export default DetailsStepTwo 