/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const CountButton = ({handleClick,buttonName}) => {
	return (
		<button onClick={handleClick}>{buttonName}</button>
	)
}

export default CountButton
CountButton.displayName = 'CountButton'