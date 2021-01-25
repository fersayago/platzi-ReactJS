//los componentes siempre inician con mayusculas
import React, { Component } from 'react';


class Stateful extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'Hola Mundo Stateful'
    }
  }
  render() {
    return (
      //llama al componente escrito encima
      <h1>{this.state.hello}</h1>
      )
    }
  }

  // ya tenemos un componente que maneja ciclo de vida, eventos y estado

export default Stateful;
