import React from "react";
import './App.css';
import { render } from 'react-dom';



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      num: Math.floor(Math.random() * 10),
      cont: 0,
      adv: 0,
      ult: 0,
      result: ""

    }
  }

  handleInput = (event) => {
    const name = event.target.name
    this.setState({ [name]: event.target.value })
  }

  handlebtn = () => {
    
     }

  render(

    if (adv == num){
      this.setState((state) => ({ 
        result: `Isso aí!! Você adivinhou o número era ${this.state.num}` }))
    }else if (adv > num) {
      this.setState((state) => ({
       result: `O número ${this.state.adv} que você chutou é um número maior do que eu havia escolhido, tente novamente` }))
    } else {
      this.setState ((state) => ({
        result: `O número ${this.state.adv} que você chutou é um número menor do que eu havia escolhido, tente novamente`}))
    
    }
   {

    return (
      <div className="App">
        <p>O numéro que estou pensando é {this.state.num} </p>
        menssagem if maior menor chutes
        <input name="adv" value={this.state.adv} onChange={this.handleInput} />
        <button onClick={this.handlebtn}></button>
        <p>{this.state.result}</p>
      </div>

    )

  }
}
export default App;
