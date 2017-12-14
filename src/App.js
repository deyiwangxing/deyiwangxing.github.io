import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './pages/home';
import Podcast from './pages/podcast';
import List from './pages/list';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/list" component={List}/>
          <Route path="/post/:podcastId" component={Podcast}/>
          <Redirect from='*' to='/' />
        </div>
      </Router>
    );
  }
}
