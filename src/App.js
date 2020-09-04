import React, { Component } from 'react';

// components
import TopNavBar from './components/TopNavBar/TopNavBar';
// import ItemList from './components/ItemList/ItemList';

import './App.css';

const intialState = {
  
}

class App extends Component {

  constructor() {
    super();
    this.state = intialState;
  }

  render() {
    
    return (
      <div className="App">
        <TopNavBar
          searchChange={this.onSearchChange}
        />
        <div></div>
        {/* <ItemList /> */}
      </div>
    );
  }
}

export default App;
