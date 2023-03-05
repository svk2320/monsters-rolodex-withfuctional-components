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
          {/* shallow merge -> completly changes the state values */}
          <button onClick={() => {this.setState((state, props) => {
            return {
              name: 'Nithi'
            }
          }, () => {console.log(this.state)})}}>Change Name</button>
        </header>
      </div>
    );
  }
};

export default App;