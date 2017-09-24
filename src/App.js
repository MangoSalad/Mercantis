import React, { Component } from 'react';
import { Provider} from 'react-redux';
import store from './store'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink,
  Link
} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './scenes/Home'
import SourceResearcher from './scenes/SourceResearcher'
import logo from './logo.svg';
import './App.css';




class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route path='/source-researcher' component={SourceResearcher} />
              <Route path='/' component={Home} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
