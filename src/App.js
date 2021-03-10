import './App.css';
import React, {useState,useEffect} from 'react';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      counter:0
    };
  }

  plusHandler = () => {
      //this.state.counter += 1;
      this.setState({counter:this.state.counter+1});
      //alert('click');
  }

  minusHandler = () => {
      //this.state.counter -= 1;
      this.setState({counter:this.state.counter-1});
      //alert('click');
  }

  componentDidMount(){
    alert('component mounted');
  }

  componentDidUpdate(){
    if(this.state.counter < 0) {
      this.setState({counter: 0});
    }
  }

  render(){
    return (
      <div className="App App-header">
        <button onClick = {this.plusHandler}>+</button>
        <h3>{this.state.counter}</h3>
        <button onClick = {this.minusHandler}>-</button>
      </div>
    );
  }
}

export default App;
