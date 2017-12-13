import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Home from './pages/home';
import Podcast from './pages/podcast';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/:podcastId" component={Podcast}/>
        </div>
      </Router>
    );
  }
}
