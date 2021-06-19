import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state_inicio = {
      num: Math.floor(Math.random() * 10),
      cont: 3,
      adv: 0,
      ult: 0    

    }

    this.state = this.state_inicio
  }

  handleInput = (event) => {
    const name = event.target.name
    this.setState({ [name]: event.target.value })
  }

  handlebtn = () => {
    this.setState((state) => ({
      ult: parseInt(state.adv), //guardar o numero digitado
      cont: this.state.cont - 1
    }))
  }

  handlenovo = () => {
    this.setState(this.state_inicio)
  }

  render()

  {
  
  return (
    <div className="App">
      <p>Chute um número entre 0 e 10</p>
      <p>Você tem {this.state.cont} tentativas!</p>
      <input name="adv" value={this.state.adv} onChange={this.handleInput} />
      {this.state.cont !== 0 && this.state.ult !== this.state.num && <button onClick={this.handlebtn}>Adivinhei?</button>}
      <p>O numéro que você chutou é {this.state.ult} </p>
      {this.state.ult > this.state.num && <p>Muito alto!</p>}
      {this.state.ult < this.state.num && <p>Muito baixo!</p>}
      {this.state.cont === 0 && this.state.ult !== this.state.num && <p>Acabaram as chances! O número era {this.state.num}</p>}
      {this.state.ult === this.state.num && <p>Acertou!</p>}
      
     <button onClick={this.handlenovo}>Novo Jogo</button>
      
      
    </div>

  )

  }
}
export default App;
