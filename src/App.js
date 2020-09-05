import React, { Component } from 'react';

// components
import TopNavBar from './components/TopNavBar/TopNavBar.js';
import SelectGrid from './components/SelectGrid/SelectGrid.js';
import './App.css';

const intialState = {
  science: {
    spm: 0,
    sps: 0
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = intialState;
  }

  onSpmChange = (event) => {
    this.setState({ 
      science: {
        spm: event.target.value,
        sps: (event.target.value / 60)
      }
    })
    document.getElementById("spsValue").value = (event.target.value / 60);
    console.log(event.target.value)
  }

  onSpsChange = (event) => {
    this.setState({ 
      science: {
        sps: event.target.value,
        spm: (event.target.value * 60)
      }
    })
    document.getElementById("spmValue").value = (event.target.value * 60);
    console.log(event.target.value)
  }

  render() {

    return (
      <div className="App">
        <nav className="navBar">
          <TopNavBar
          />
        </nav>
        <SelectGrid
          onSpmChange={this.onSpmChange}
          onSpsChange={this.onSpsChange}
        />
      </div>
    );
  }
}

export default App;
