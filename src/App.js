import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' render={() => <div> nasl </div>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
