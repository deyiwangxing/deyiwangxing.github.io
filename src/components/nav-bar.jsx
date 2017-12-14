import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './nav-bar.css';

export default class NavBar extends Component {
	render() {
		return (
			<div className="nav">
				<button type="button" class="navbar-toggle">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<div className="logo">得意忘形</div>
				<ul className="navigation">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/list">List</Link></li>
					<li><Link to="/post/222">About</Link></li>
				</ul>
			</div>
		)
	}
}