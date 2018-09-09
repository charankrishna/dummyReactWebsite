import React, { Component } from 'react';

import './App.css';
import Nav from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">   
          <Nav/>
          <Switch>
          <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={About} />
            <Route exact path='/portfolio' component={Portfolio} />
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
