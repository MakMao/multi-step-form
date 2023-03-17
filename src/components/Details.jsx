import React, {useState} from 'react'
import styled from 'styled-components'
import { useGlobalContext } from './context'
import DetailsStepOne from './details/DetailsStepOne'
import DetailsStepTwo from './details/DetailsStepTwo'
import DetailsStepThree from './details/DetailsStepThree'
import DetailsStepFour from './details/DetailsStepFour'
import DetailsStepFive from './details/DetailsStepFive'

const Details = () => {

  const {index} = useGlobalContext()

return (
  <Container>
    {index === 0 ? 
    <div className="time">
      <DetailsStepOne/>
    </div>
  : index === 1 ? 
    <div className="time">
      <DetailsStepTwo/>
    </div>
  : index === 2 ? 
  <div className="time">
    <DetailsStepThree/>

  </div>
  : index === 3 ?
    <DetailsStepFour/>
  : index === 4 ? 
    <DetailsStepFive/>       
  : ''
  }
  </Container>
)
}

const Container = styled.div`
  padding: 1.7em 1.5em;
  background-color: #fff;
  border-radius: 8px;


.time {
  transition-delay: 2s;
  }

.info {
  margin: 1em 0;
}

label {
  display: block;
}
.img-option {
  margin-right: 0.5em;
}

.option {
  display: flex; 
  align-items: center; 
}

.toggle-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  margin: 0 auto 4em;
  transition: transform 0.4s ease;
}

.toggle-container label {
	background-image: var(--linear-main);
  display: inline-block;
  height: 24px;
  width: 48px;
  background: pink;
  border-radius: 50px;
  position: relative;
  transition: transform 0.4s ease;
}

.toggle-container .ball {
  height: 16px;
  width: 16px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 4px;
  transition: transform 0.4s ease;
}

.is-checked {
  transform: translateX(4px);
  transition: transform 0.4s ease;
}

.is-not-checked {
  transform: translateX(28px);
  transition: transform 0.4s ease;
}

.toggle-container input {
  transform: translateX(-99999px);
  position: absolute;
}

.label-add-ons {
  margin: 0 1em; 
}
`

export default Details