import React from 'react'
import { useGlobalContext } from '../context'
import styled from 'styled-components'

const DetailsStepFour = () => {
  const {monthly, choice, openModal} = useGlobalContext()
  const monthlyTotal = (choice.addOns ? choice.addOns.map((item) => item.priceMonth).reduce((a, b) => a + b, 0) : 0) + choice.price
  const yearlyTotal = (choice.addOns ? choice.addOns.map((item) => item.priceYear).reduce((a, b) => a + b, 0) : 0) + choice.price

  return (
    <Container>
      <h2>Finishing up</h2>
      <p className="info">Double-check everything looks OK before confirming.</p>
      <div className="overview">
        <div className="type">
          <div className="period">
            <h4 className="chosen-type">{choice.plan}{choice.month ? '(Monthly)' : '(Yearly)'}</h4>
            <button className="chosen-btn" onClick={openModal}>Change</button>
          </div>
          <h4 className="price-type">{monthly ? `$${choice.price}/mo` : `$${choice.price}/yr`}</h4>
        </div>
        <div className="underline"></div>
        <div className="extras">
          {choice.addOns.map((item, i) => {
            const {name, priceMonth, priceYear, pirce} = item
            return (
              <div className="extra" key={i}>
                <p className="extra-name">{name}</p>
                <p className="price-extra">{monthly ? `+$${priceMonth}/mo` : `$${priceYear}/yr`}</p>
              </div>
            )
          })}
        </div>
      </div>
        <div className="total">
          <p>Total (per month)</p>
          <p className="total-price">
            {monthly ? `+$${monthlyTotal}/mo` : `+$${yearlyTotal}/yr`}
          </p>
        </div>
    </Container>
  )
}

const Container = styled.div`
  padding: 1.7em 1.5em;
  background-color: #fff;
  border-radius: 8px;


.info {
  padding: .7em 0;
}

@media (min-width: 768px) {
  .info {
    padding: .7em 0 2em 0;
  }
}

.overview {
  background-color: rgba(71, 61, 255, 0.07);
  padding: 1em 1em 0 1em;
  border-radius: 5px;
}

.total {
  padding: 1em 1em 0 1em;
}

.total-price {
  color: var(--clr-purplish-blue);
  font-weight: 700;
}

.extra-name {
  margin-bottom: 1em;
}

.type,
.extra,
.total{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price-extra {
  font-size: 0.875rem;
  color: var(--clr-marine-blue); 
  font-weight: 500;
}

.chosen-type{
  color: var(--clr-marine-blue);
}

.price-type {
  color: var(--clr-marine-blue);
  font-size: 0.875rem;
}

.underline {
  background: var(--clr-light-gray);
  height: 1px;
  margin: 0.7em 0 0.4em 0;  
}

.chosen-btn {
  border: 0;
  background: transparent;
  color: var(--clr-cool-gray);
  text-decoration: underline;
  text-decoration-thickness: 2px;
  cursor: pointer;
}

.chosen-btn:hover{
  color: var(--clr-purplish-blue);
}

`

export default DetailsStepFour