/* eslint-disable no-unused-vars */
import {useReducer} from 'react'
import './App.css'
import CountButton from './Components/Buttons/CountButton'

const reducer = (state,action) => {
  //
}

function App() {
  // const [state] - state variable similar to useState
  // const [dispatch] - function to update state similar to useState
  // userReducer(...) - initialstate similar to useState (this is specifically the part that comes after the reducer function)
  const initialCount = 10
  // state will always be called state. and the general convention is to use an object that will combine all the state required to make our component work correctly.
  // dispatch will always be called dispatch
  // so if i want to access the count state, i will use state.count
  const [state,dispatch] = useReducer(reducer,{
    count: initialCount,
    valueToAdd: 0
  })

  const increment = () => { }
  const decrement = () => { }

  return (
    <div >
      {/* ****USE REDUCER PRACTICE */}
      <CountButton
        handleClick={increment} />
      <CountButton
        handleClick={decrement} />
      <p>{state.count}</p>
    </div>
  )
}

export default App
