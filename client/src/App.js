import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home';
import Navbar from './components/navbar';
import Explore from './components/explore';

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/explore' component={Explore} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
