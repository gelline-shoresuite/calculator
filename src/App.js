import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      firstNumber: '',
      secondNumber: '',
      setCalcu: '',
    }
  }

  addNumber = (event) =>{
    this.setState({firstNumber: this.state.firstNumber + event.target.value});
  }

  clearNumber = (event) =>{
    this.setState({firstNumber: "", secondNumber: ""});
  }

  equation = (event) =>{
    if(event.target.value !== "equals"){
      this.setState({
        secondNumber: this.state.firstNumber,
        firstNumber: '',
        setCalcu: event.target.value,
      },() =>{
        console.log("Second Number: " + this.state.secondNumber);
        console.log("First Number: " + this.state.firstNumber);
        console.log("Equation: " + this.state.setCalcu);
      });
    }else{
      switch(this.state.setCalcu){

        case "divide":
          this.setState({
            firstNumber: parseInt(this.state.secondNumber) / parseInt(this.state.firstNumber),
          })
          break;

        case "plus":
          this.setState({
            firstNumber: parseInt(this.state.secondNumber) + parseInt(this.state.firstNumber),
          })
          break;

        case "minus":
          this.setState({
            firstNumber: parseInt(this.state.secondNumber) - parseInt(this.state.firstNumber),
          })
          break;

        case "multiply":
          this.setState({
            firstNumber: parseInt(this.state.secondNumber) * parseInt(this.state.firstNumber),
          })
          break;

        default: 
          break;
      }
    }
    
  }


  render() {
    return (
      <div className="App">
        <table>
          <tbody>

            <tr>
              <td colSpan="4"><input type="text" value={this.state.firstNumber} disabled/></td>
            </tr>
            <tr>
              <td><button value="1" onClick={this.addNumber}>1</button></td>
              <td><button value="2" onClick={this.addNumber}>2</button></td>
              <td><button value="3" onClick={this.addNumber}>3</button></td>
              <td><button value="divide" onClick={this.equation}>/</button></td>
            </tr>
            <tr>
              <td><button value="4" onClick={this.addNumber}>4</button></td>
              <td><button value="5" onClick={this.addNumber}>5</button></td>
              <td><button value="6" onClick={this.addNumber}>6</button></td>
              <td><button value="plus" onClick={this.equation}>+</button></td>
            </tr>
            <tr>
              <td><button value="7" onClick={this.addNumber}>7</button></td>
              <td><button value="8" onClick={this.addNumber}>8</button></td>
              <td><button value="9" onClick={this.addNumber}>9</button></td>
              <td><button value="minus" onClick={this.equation}>-</button></td>
            </tr>
            <tr>
              <td><button value="" onClick={this.clearNumber}>clear</button></td>
              <td><button value="0" onClick={this.addNumber}>0</button></td>
              <td><button value="equals" onClick={this.equation}>=</button></td>
              <td><button value="multiply" onClick={this.equation}>*</button></td>
            </tr>

          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
