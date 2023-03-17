import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'

const AppContext = React.createContext()

export const AppProvider = ({children}) => {

const [index, setIndex] = useState(0)
const [indexje, setIndexje] = useState(0)
const [choice, setChoice] = useState({month: true, plan: 'Arcade', price: 0, addOns: []})
const [monthly, setMonthly] = useState(true)
const [active, setActive] = useState(0)
const [windowWidth, setWindowWidth] = useState(window.innerWidth)
const [modal, setModal] = useState(false)

const handleWidth = () => {
  setWindowWidth(window.innerWidth)
}

const handleOnclick = () => {
     setIndex(prevIndex => prevIndex + 1)
  }

const closeModal = () => {
  setModal(false)
}

const openModal = () => {
  setModal(true)
}

const handleSubmit = (values, actions) => {
  axios({
    method: "POST",
    url: "https://formspree.io/f/xgebzjpe",
    data: values
  })
    .then(response => {
      setIndex(1)
    })
    .catch(error => {
      console.log(error);
  });
};

   const handleState = () => {
    if(active === 0 && monthly === true){
      setChoice({...choice, month: true, plan: 'Arcade', price:9})
    }else if(active === 0 && monthly === false){
      setChoice({...choice, month: false, plan: 'Arcade', price:90})
    }else if(active === 1 && monthly === true){
      setChoice({...choice, month: true, plan: 'Advanced', price: 12})
    }else if(active === 1 && monthly === false){
      setChoice({...choice, month: false, plan: 'Advanced', price: 120})
    }else if(active === 2 && monthly === true){
      setChoice({...choice, month: true, plan: 'Pro', price: 15})
    }else if(active === 2 && monthly === false){
      setChoice({...choice,month: false, plan: 'Pro', price: 150})
    }
  }
  const allOptions = [
  {name:  'online service', info: 'Access to multiplayer games', checked: false, priceMonth: 1, priceYear: 10},
  {name:  'larger storage', info: 'Extra 1TB of cloude save', checked: false, priceMonth: 2, priceYear: 20},
  {name:  'customizable profile', info: 'Custom theme on your profile', checked: false, priceMonth: 2, priceYear: 20},
]

const [optionss, setOptionss] = useState(allOptions)

let copyOptions;
let modifiedOptions;


const updateFilters = (e) => {
  const target = e.target.name
  copyOptions = [...optionss]
  modifiedOptions = copyOptions.map((item) => {
    if(item.name === target){
      item.checked = !item.checked
    }
    return item
  })
  setOptionss(modifiedOptions)
  const selectedOptions  = optionss.filter((item) => item.checked === true)
  setChoice({...choice, addOns: selectedOptions})
}

  useEffect(() => {
  window.addEventListener('resize', handleWidth)
  return () => {
    window.removeEventListener('resize', handleWidth)
  }
}, [windowWidth > 768])
  
  const value ={
    handleOnclick,
    index, 
    setIndex,
    monthly,
    setMonthly,
    choice,
    setChoice,
    handleState,
    active,
    setActive,
    allOptions,
    optionss,
    setOptionss,
    copyOptions,
    modifiedOptions, 
    updateFilters,
    indexje,
    setIndexje,
    handleSubmit,
    windowWidth,
    setWindowWidth,
    modal,
    setModal,
    closeModal,
    openModal
  }

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

