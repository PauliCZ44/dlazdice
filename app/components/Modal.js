import React, { useState } from 'react'
import { SettingsIcon } from "../containers/HomePage/icons/svgicons";

const Modal = (props) => {

  const showWhenVisible = { opacity: props.visible ? '1' : '0', display: props.visible ?  '' : 'none' }
  const displayWhenVisible = {display: props.visible ?  '' : 'none'}

  if (!props.visible) {
    return (
      <div>
        <button onClick={props.toggleVisibility} className="settings-icon">
          <SettingsIcon color="white" />
        </button> 
      </div>
    )
  } else {
    return (  
      <>
      <div>
        <button onClick={props.toggleVisibility} className="settings-icon">
          <SettingsIcon color="white" />
        </button> 
      </div>        
      <div>
        <div style={showWhenVisible} className={'my-modal  fade-in'} >
          <button style={displayWhenVisible} onClick={props.toggleVisibility} className="background-closing-btn">Close</button>
          {props.children}
        </div>
      </div>
      </>
    )
  }
}

export default Modal
