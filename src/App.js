import React, { Component } from 'react';
import "./css/open-iconic-bootstrap.min.css";
import "./css/animate.css";
//import "./css/owl.carousel.min.css";
import "./css/owl.theme.default.min.css";
import "./css/magnific-popup.css";
import "./css/ionicons.min.css";
import './css/bootstrap.min.css';
import "./css/style.css";
import "./css/icomoon.css";
import "./css/flaticon.css";
import "./css/jquery.timepicker.css";
import "./css/bootstrap-datepicker.css";
import "./css/aos.css";





import Nav from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';
import Slider from './components/slider';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends Component {
  render() {
    return (
      <Router>
      <div>   
          <Nav/>
          <Slider/>
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
