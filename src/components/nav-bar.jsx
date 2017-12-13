import React, { Component } from 'react';
import './nav-bar.css';

export default class NavBar extends Component {
	render() {
		return (
			<div className="nav">
				<div className="logo">得意忘形</div>
				<ul className="navigation">
					<li>Home</li>
					<li>List</li>
					<li>About</li>
				</ul>
			</div>
		)
	}
}