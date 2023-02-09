import React from 'react'
import '../styles/botonClear.css'

const BotonClear = (props) => {
  return (
    <div className='boton-clear'
    onClick={props.borrarInput}>        
    {props.children}
    </div>
  )
}

export default BotonClear