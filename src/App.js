import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Nithish'
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name}</p>
          {/* shallow merge */}
          <button onClick={() => {this.setState({name : 'nithi'})}}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;