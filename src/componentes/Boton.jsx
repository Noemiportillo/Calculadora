import React from 'react'
import '../styles/boton.css'

const Boton = (props) => {

		const esOperador = (valor) => {
				return isNaN(valor) && (valor !== '.') ;
		};

  return (
    <div 
			className={`contenedor-boton ${esOperador(props.children) ? 'operador' : '' }`.trimEnd()}
			onClick={() => props.darClick(props.children)}
			>
			{props.children}
    </div>
  )
}
export default Boton

// return isNaN(valor) && (valor !== '.') && (valor !== '=');