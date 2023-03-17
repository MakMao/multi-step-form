import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from "./context"


const Footer = () => {
  const {active, setIndex, index} = useGlobalContext()
  return (
    <Container>
      <div className={`${index === 0 ? 'first-page' : 'next-prev-container'}`}>
       {index > 0 && <button className="prev-btn" onClick={() => setIndex(index => index - 1)}>Go Back</button>} 
      {index < 3 && <button className="next-btn" onClick={() => setIndex(index => index + 1)}>Next Step</button>}
      {index === 3 && <button className="next-btn confirm-btn" onClick={() => setIndex(index => index + 1)}>Confirm</button>}
      </div>
    </Container>
  )
}

const Container = styled.div`
 margin: 1em 0 1em 2em;

 .confirm-btn {
   background: var(--clr-purplish-blue);
 }

 .confirm-btn:hover {
  opacity: 0.7;
 }
.first-page {
  display: flex;
  justify-content: flex-end;
}
`

export default Footer