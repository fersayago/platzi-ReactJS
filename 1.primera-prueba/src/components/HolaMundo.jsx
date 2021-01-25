import React from 'react'


//usamos un componente Stateless
const  HolaMundo = () => {

  const Hello = 'Hola Mundo'
  const isTrue = true;

  return (
    <div className="ClaseMundo">
      {/* Encapsulo y llamo a la variable */}
      <h1>{Hello}</h1>
      <h2>Curso Esencial de React</h2>
      <img src="https://arepa.s3.amazonaws.com/react.png" alt="React"/>
      {/* Hacer validaciones */}
      {isTrue ? <h4>Esto es verdadero</h4> : <h5>SoyFalso</h5>}
      {isTrue && <h4>Soy Verdadero</h4>}
    </div>
  )
}

export default HolaMundo;