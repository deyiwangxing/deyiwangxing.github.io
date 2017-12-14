import React, { Component } from 'react';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
export default class Podcast extends Component {
	render() {
		return (
			<div>
				<NavBar />
        <h1>list</h1>
				<Footer />
			</div>
		)
	}
}