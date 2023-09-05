/* eslint-disable no-unused-vars */
import {useReducer,useState} from 'react'
import './App.css'
import CountButton from './Components/Buttons/CountButton'
import Reducer from './reducers/Reducer.jsx'
import {BTN_OPERATIONS} from './utils.js'

// const reducer = (state,action) => {
  // state is whatever the current state is
  // action is whatever we pass into dispatch
  // action is always an object (because you can only pass in one argument at a time) so to get multiple props, we pass in an object with a type property
  // 1. whatever we return from the reducer function will be the new state
  // 2. if you return the same state, react will not re-render the component
  // 3. if you return nothing, then your state will be undefined
  // 4. no async code in reducer, no requests, no promises, no outside variables
  // !!! we want the reducer function to only operate on the state and action that is passed in, thats it
  // !!! we want the reducer function to be a pure function, meaning it does not change anything outside of itself
  // !!! we want the reducer function to be a synchronous function, meaning it does not have any async code
  // we alays have to return an object, and update it immutably, therefore we must spread in the previous state, and update the neccessary properties as needed.
  // for instance :
  // return {
  //   ...state,
  //   valueToAdd: state.valueToAdd + 1
  // }
// }

function App() {
  const {INCREMENT,DECREMENT,ADD_TO_COUNT} = BTN_OPERATIONS
  const [inputValue,setInputValue] = useState(0);
  // const [state] - state variable similar to useState
  // const [dispatch] - function to update state similar to useState
  // userReducer(...) - initialstate similar to useState (this is specifically the part that comes after the reducer function)
  const initialCount = 10
  // state will always be called state. and the general convention is to use an object that will combine all the state required to make our component work correctly.
  // dispatch will always be called dispatch: dispatch is how we trigger a state update
  // dispatch takes in the firast argument which we are calling reducer
  // so if i want to access the count state, i will use state.count
  // you do not have to pass anything into dispatch, but if you do, it will be passed into the reducer function as the action argument
  // here's what will happen if you dont pass anything into dispatch: dispatch() -> reducer(undefined,undefined)
  const [state,dispatch] = useReducer(Reducer,{
    count: initialCount,
    valueToAdd: 0
  })
  // when dispatch is called, react will call the reducer function, and pass in the current stateas the first argument... and the action will be anything that was passed into dispatch(if nothing was passed in, then the action will be undefined)
console.log(state)
  const increment = () => {
    dispatch({
    type: INCREMENT
    })
  }
  const decrement = () => {
    if (state.count > 0) {
      dispatch({
        type: DECREMENT
      })
    }
  }
  const handleOnChange = (e) => setInputValue(parseInt(e.target.value) || 0)
  const addToCount = (val) => {
    // e.preventDefault()
    dispatch({
      type: ADD_TO_COUNT,
      payload: val})
  }
  return (
    <div >
      {/* **** USE REDUCER PRACTICE */}
      <CountButton
        handleClick={increment}
        buttonName={'Increment Count+'} />
      <CountButton
        handleClick={decrement}
        buttonName={'Decrement Count-'}
      />
      <p>{state.count}</p>
      <div>
        <input
          type="number"
          placeholder="Enter a Number..."
          value={inputValue || ''}
          onChange={(e) => handleOnChange(e)}
        />
        <CountButton
          handleClick={() => addToCount(inputValue)}
          buttonName={'Add to Count'}
        />
      </div>
    </div>
  )
}

export default App
App.displayName = 'App'

