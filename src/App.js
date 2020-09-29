import React, { Component } from 'react';
import CustomerCard from './components/CustomerCard';
import Demo from './components/Demo';
import Login from './components/Login';
import Sample from './components/Sample';
import { customers } from './data';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Login />
      </React.Fragment>
    );
  }
}

export default App;
