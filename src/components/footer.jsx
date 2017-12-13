import React, { Component } from 'react';
import './nav-bar.css';

export default class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div className="logo">All Rights Reserved</div>
				<ul className="navigation">
					<li>weibo</li>
					<li>ximalaya</li>
					<li>lizhi</li>
				</ul>
			</div>
		)
	}
}