import React from 'react'
import {ErrorMessage, useField} from 'formik'
import styled from 'styled-components'

export const TextField = ({label, ...props}) => {
  const [field, meta] = useField(props)
  
  return (
    <Container>
      <div className="form-control">
        {field.name === 'message' ? 
        <>
      <label htmlFor={field.name}>{label}</label>
        <textarea {...field}{...props} className={`${meta.error && meta.touched && 'invalid'}`} row={10} col={10}/>
            <ErrorMessage name={field.name}>
              {msg => 
              <div className="error-display">
                {msg}
              </div>}
            </ErrorMessage>
        </>
        : 
        <>
           <label htmlFor={field.name}>{label}</label>
        <input {...field}{...props} className={`${meta.error && meta.touched && 'invalid'}`} row={10} col={10}/>
            <ErrorMessage name={field.name}>
              {msg => 
              <div className="error-display">
                {msg}
              </div>}
            </ErrorMessage>
        </>
        }
        </div>
    </Container>
  )
}

const Container = styled.div `

.form-control {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.3em;
  position: relative;
}

.invalid {
  border-color: red !important; 
}

.error-display {
  display: flex;
  border-radius: 5px;
  color: red;
  align-items: center;
  font-size: 0.7rem;
}

` 