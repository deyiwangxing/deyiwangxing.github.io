import React, { Component } from 'react';
import NavBar from '../components/nav-bar';
import Intro from '../components/intro';
import Footer from '../components/footer';
import './home.css';

export default class Home extends Component {
	render() {
		return (
			<div className="content">
				<NavBar />
				<Intro />
				<Footer />
			</div>
		)
	}
}