import React from 'react'
import PropTypes from "prop-types";

const Alert = ({message}) => {
  return (
    <div className="alert">
    {message} 
    </div>
  )
}

Alert.PropTypes = {
    message: PropTypes.string.isRequired,
    success: PropTypes.bool.isRequired,

}

export default Alert
