import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      num: Math.floor(Math.random() * 10),
      cont: 3,
      adv: 0,
      ult: 0    

    }
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
    this.setState ({
      num: Math.floor(Math.random() * 10),
      cont: 3,
      adv: 0,
      ult: 0,
    })
  }

  render()

    //for (var i = 3;i >= 0;i--) { }
  /*


    if(adv == num) {
  this.setState((state) => ({
    result: `Isso aí!! Você adivinhou o número era ${this.state.num}`
  }))
  }else if (adv > num) {
  this.setState((state) => ({
    result: `O número ${this.state.adv} que você chutou é um número maior do que eu havia escolhido, tente novamente`
  }))
  } else {
  this.setState((state) => ({
    result: `O número ${this.state.adv} que você chutou é um número menor do que eu havia escolhido, tente novamente`
  }))

  }*/
  {
  
  return (
    <div className="App">
      <p>Chute um número entre 0 e 10</p>
      <p>Você tem {this.state.cont} tentativas!</p>
      <input name="adv" value={this.state.adv} onChange={this.handleInput} />
      <button onClick={this.handlebtn}>Adivinhei?</button>
      <p>O numéro que você chutou é {this.state.ult} </p>
      {this.state.ult > this.state.num && <p>Muito alto!</p>}
      {this.state.ult < this.state.num && <p>Muito baixo!</p>}
      {this.state.cont === 0 && <p>Acabaram as chances!</p>}
      {this.state.ult === this.state.num && <p>Acertou!</p>}
      
     <button onClick={this.handlenovo}>Novo Jogo</button>
      
      
    </div>

  )

  }
}
export default App;
