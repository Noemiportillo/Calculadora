import './App.css';
import Boton from './componentes/Boton';
import BotonClear from './componentes/BotonClear';
import Input from './componentes/Input';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState(''); 
  const [resultado, setResultado] = useState('');


  const agregarInput = (valor) => {
      if (resultado) {
        setResultado('');
        setInput(valor);
      } else {
        setInput(input + valor);
      }
    }
  const calcularResultado = () => {
      if (input) {
        const result = evaluate(input);
        setResultado(result);
      } else {
        alert('Por favor añade valores para realizar los cálculos')
      }
    }

  const borrarUltimo = () => {
    setInput(input.slice(0, -1));
  }

  return (    
    <div className='App'>
      <h2 className='title'> CALCULADORA </h2>  
      <div className='container-calculadora'>
        <Input
         input={resultado ? resultado : input}
          />
        <div className='row'>
          <Boton darClick={agregarInput}>1</Boton>
          <Boton darClick={agregarInput}>2</Boton>
          <Boton darClick={agregarInput}>3</Boton>
          <Boton darClick={agregarInput}>+</Boton>
        </div>
        <div className='row'>
          <Boton darClick={agregarInput}>4</Boton>
          <Boton darClick={agregarInput}>5</Boton>
          <Boton darClick={agregarInput}>6</Boton>
          <Boton darClick={agregarInput}>-</Boton>
        </div>
        <div className='row'>
          <Boton darClick={agregarInput}>7</Boton>
          <Boton darClick={agregarInput}>8</Boton>
          <Boton darClick={agregarInput}>9</Boton>
          <Boton darClick={agregarInput}>*</Boton>
        </div>
        <div className='row'> 
          <Boton darClick={agregarInput}>.</Boton> 
          <BotonClear borrarInput ={borrarUltimo}>CE</BotonClear>
          <BotonClear borrarInput ={() => setInput('')}>C</BotonClear>
          <Boton darClick={agregarInput}>/</Boton>
        </div>
        <div className='row'>
         <Boton darClick={agregarInput}>0</Boton>             
         <Boton darClick={calcularResultado}>=</Boton>       
        </div>
      </div>
    </div>
  );
}

export default App;
