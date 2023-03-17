import React, {useState} from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'

const DetailsStepThree = () => {

const { monthly, optionss, updateFilters} = useGlobalContext()

return (
  <Container>
    <div className="container">
      <h2>Pick add-ons</h2>
      <p className="info">Add-ons help enhance your gaming experience.</p>
      <form>
        {optionss.map((item, index) => {
          const {name, info, checked, priceMonth, priceYear} = item
          return (
            <div className={checked ? 'form-control checked-one' : 'form-control'} key={index}>
              <label className="checkbox">
              <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={updateFilters}
              />
              <span className="checkmark"></span>
              </label>
              <label htmlFor={name}>
                <div>
                  <h4>{name}</h4>
                  <p className="info-text">{info}</p>
                </div>
              </label>
              <p className="set-flex">{monthly ? `+$${priceMonth}/mo` : `$${priceYear}/yr`}</p>
            </div>
          )
        })}
      </form>
    </div>
  </Container> 
)
}

const Container = styled.div`

.container {
  padding: 1.7em 1.5em;
  background-color: #fff;
  border-radius: 8px;
}

.form-control {
  border: 1px solid var(--clr-light-gray);
  margin: 0.7em 0;
  display: flex; 
  align-items: center;
  justify-content: flex-start;
  padding: 0.7em;
  border-radius: 7px;
  transition: 0.15s;
}


.form-control:hover {
  border: 1px solid var(--clr-purplish-blue);
}

.set-flex {
  margin-left: auto;
  font-size: 0.875rem;
}

.info-text {
  font-size: 0.75rem;
}

.info {
  padding: 0.5em 0 1em 0;
}

.checked-one {
  border: 1px solid var(--clr-purplish-blue);
  background: rgba(71, 61, 255, 0.07);
}

h4{
  color: var(--clr-marine-blue);
  text-transform: capitalize;
  font-size: 0.875rem;
}

.checkbox {
  display: inline-block;
  position: relative;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
  padding: 0.5em 1.5em 0.5em 0.5em; 
  margin-top: -.2em;
}

.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #fff;
  border: 1px solid var(--clr-light-gray);
  border-radius: 5px;
}

.checkbox:hover input ~ .checkmark {
  background-color: #fff;
}

.checkbox input:checked ~ .checkmark {
  background-color: var(--clr-purplish-blue);
  z-index: 333;
  border: 1px solid var(--clr-purplish-blue);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox input:checked ~ .checkmark:after {
  display: block;
}

.checkbox .checkmark:after {
  left: 6px;
  top: 3px;
  width: 7px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

@media (min-width: 768px) {
  .form-control{
    padding: 1em;
  }
  .container {
    padding: 0 1.5em;
  }
}
`

export default DetailsStepThree