/* eslint-disable no-unused-vars */
// import React from 'react'
import {BTN_OPERATIONS } from '../utils.js'

// state is the current state
// action is whatever we pass into dispatch
// :: you can only pass in one argument(action into dispatch) at a time
const Reducer = (state,action) => {
	const {INCREMENT,DECREMENT,ADD_TO_COUNT} = BTN_OPERATIONS
	//whatever is returned from this code block will be the new state object
	console.log(state.count + action.payload)
		switch (action.type) {
			case INCREMENT:
				return ({
					...state,
					count: state.count + 1
				})
			case DECREMENT:
					return ({
						...state,
						count: state.count - 1
					})
			case ADD_TO_COUNT:
				return ({
					...state,
					count: state.count + action.payload
				})
			default: return state
		}
}

export default Reducer
Reducer.displayName = 'Reducer'