import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { stringLiteral } from '@babel/types';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = { string: '' };

  changeStringHandler = (event) => {
    this.setState({ string: event.target.value });
  }

  removeCharHandler = (index) => {
    const stringArr = this.state.string.split('');
    stringArr.splice(index, 1);
    const updatedText = stringArr.join('');
    this.setState({string:updatedText});
  }

  render(){

    let strLength = this.state.string.length;
    const charList = this.state.string.split('').map((ch, index) => {
      if(ch !== ' '){
        return (
          <CharComponent char={ch.toUpperCase()} click={()=>{this.removeCharHandler(index)}} />
        );
      }
    });

    return (
      <div className="App">
        <h1>Welcome To Basic Part II</h1>
        <p><input onChange={(event)=>this.changeStringHandler(event)} value={this.state.string} type="text" /> {strLength}</p>
        <ValidationComponent length={this.state.string.length} />
        <div>{charList}</div>
      </div>
    );
  }

}

export default App;
