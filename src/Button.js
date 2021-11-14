//rafce za tamplate
import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
    return (
        <button onClick={props.toggleAddTask} className={props.color }  >{props.text} </button>
    )
}
Button.propTypes={
    text:PropTypes.string,
    color:PropTypes.string.isRequired,
    

}

export default Button
