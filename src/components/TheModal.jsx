import React from 'react'
import styled from 'styled-components'
import DetailsStepTwo from './details/DetailsStepTwo';
import { useGlobalContext } from './context';

const TheModal = () => {
  const  {closeModal} = useGlobalContext()

  return (
    <Container>
      <div className="modal-container"></div>
      <div className="modal">
        <DetailsStepTwo/>
        <button className="close-modal next-btn" onClick={closeModal}>
          close
        </button>
      </div>
    </Container>
  )
}

const Container = styled.div`

.modal-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: var(--clr-pastel-blue);
  opacity: 0.8;
  z-index: 33;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 320px;
  height: 420px;
  padding: 1em; 
  background: white;
  opacity: 1;
  border-radius: 7px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  z-index: 555;
}

@media (max-width: 768px) {
  .modal {
    height: 500px; 
  }
}

.close-modal {
  width: 70px;
  margin: 0 auto; 
  margin-top: 1em;
}
`

export default TheModal