import React, { Component } from 'react';
import style from './nav-bar.css';

export default class NavBar extends Component {
	render() {
		return (
			<div className={style.nav}>
				<div className={style.logo}>得意忘形</div>
				<ul className={style.navigation}>
					<li>Home</li>
					<li>List</li>
					<li>About</li>
				</ul>
			</div>
		)
	}
}