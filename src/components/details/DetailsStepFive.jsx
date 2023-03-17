import React from 'react'
import icon from '../../assets/images/icon-thank-you.svg'
import styled from 'styled-components';

const DetailsStepFive = () => {
  return (
    <Container>
      <img src={icon} alt="thank you icon" />
      <h2>Thank you!</h2>
      <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 4em 2em;
  background-color: #fff;
  border-radius: 8px;

  img {
    width: 50px;
    height: 50px;
  }

  h2 {
    margin: 1em 0 0.5em 0; 
  }

  p {
    text-align: center;
  }

  
`

export default DetailsStepFive