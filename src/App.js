import React, { Component } from 'react';
import { Provider} from 'react-redux';
import store from './store'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom'
import SourceResearcher from './scenes/SourceResearcher'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/source-researcher' component={SourceResearcher} />
            <Route path='/' render={() => <div> nasl </div>} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
