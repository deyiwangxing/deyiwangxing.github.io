import React, { Component } from 'react';
import NavBar from '../components/nav-bar';
import Intro from '../components/intro';

import style from './home.css';

export default class Home extends Component {
	render() {
		return (
			<div className={style.content}>
				<NavBar />
				<Intro />
				<h1>home</h1>
			</div>
		)
	}
}