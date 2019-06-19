import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: 'Hardev Sharma'
  };

  setUsername = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  render(){
    return (
      <div className="App">
        <h2>Welcome to React Assignment - I</h2>
        <UserInput value={this.state.username} change={this.setUsername} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  };

}

export default App;
