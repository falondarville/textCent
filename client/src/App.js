import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home';
import Navbar from './components/navbar'

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
