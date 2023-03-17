import React from 'react'
import styled from 'styled-components'
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import {TextField} from '../TextField'
import { useGlobalContext } from '../context';
import axios from 'axios'




const DetailsStepOne = () => {

const {handleSubmit, windowWidth} = useGlobalContext()

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validate = Yup.object({
  name: Yup.string()
    .min(2, 'Your name must contain at least 2 letters')
    .max(30, 'Your name must be 30 characters or less')
    .required('Name is required'),
  email: Yup.string()
    .email('Email is invalid')
    .max(30, 'Your email must be 30 characters or less')
    .required('Email is required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Your phone number is required'),
})
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
      }}
      validationSchema={validate}
      onSubmit={handleSubmit} 
    >
      {formik => (
      <Container>
        <div className="main">
          <Form>
              <div>
                <h2>Personal info</h2>
                <p className="info-intro">Please provide your name, email address, and phone number.</p>
                <div>
                  <div>
                    <TextField label="Name" name="name" type="text" placeholder="e.g. Stephen King"/>
                  </div>
                  <div className="input-email">
                    <TextField label="Email Address" name="email" type="email" placeholder="e.g. stephenking@lorem.com"/>
                  </div>
                </div>
                <div >
                  <TextField label="Phone Number" name="phone" type="text" placeholder="e.g. +1 234 567 890"/>
                </div>
                {windowWidth < 768 ? (
                <div className="btn-container">
                  <button type="submit" onClick={handleSubmit} className="next-btn">Next Step</button>
                </div>
                ) : ''}
              </div>
          </Form>
        </div>
    </Container>
      )}
    </Formik>

  )
}

const Container = styled.div`

.btn-container {
  background: #fff;
  position: fixed;
  cursor: pointer;
  bottom: -100vh; 
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1em;
}

.info-intro {
  margin: 1em 0 2em 0;
}

.info {
  margin: 1em 0;
}

.option {
  display: flex; 
  align-items: center; 
}

.form-control {
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: flex-start;
  width: 100%;
  margin-bottom: 1em;
  row-gap: 0.2em;
}

label {
  font-size: 0.75rem;
  color: var(--clr-marine-blue);
}

input {
  width: 100%;
  padding: 0.8em 0.8em;
  border: 1px solid var(--clr-light-gray);
  border-radius: 5px ;
  outline: 0;
  color: var(--clr-marine-blue);
  font-weight: 700;
}

input::placeholder {
  opacity: 0.6;
}
`

export default DetailsStepOne