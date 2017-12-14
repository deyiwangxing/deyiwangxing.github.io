import React, { Component } from 'react';
import { init } from 'ityped';
import NavBar from '../components/nav-bar';
import Intro from '../components/intro';
import PodcastCard from '../components/podcast-card';
import Footer from '../components/footer';
import './home.css';

export default class Home extends Component {
	componentDidMount() {
		init(`#ele2`, {
			strings: ['Whereof one cannot speak,', 'thereof one must be silent.', 'Whereof one cannot speak,', 'thereof one must be silent.', 'Whereof one cannot speak,', 'thereof one must be silent.', 'Whereof one cannot speak, thereof one must be silent.'],
			typeSpeed: 180,
			backSpeed: 60,
			startDelay: 500,
			backDelay: 2500,
			loop: false,    
			showCursor: false,    
			cursorChar: "",
			onFinished: function(){}
		});
	}
	render() {
		const arr = [0, 1, 2, 3, 4, 5, 6, 8, 9, 0];
		return (
			<div className="content">
				<div id="header">
					<div className="mask"></div>
					<NavBar />
					<div>
						<span id="ele2" className="bio"></span>
					</div>
				</div>
				<Intro />
				<div className="podcastCards">
					{
						arr.map(index => {
							return <PodcastCard key={index}/>
						})
					}
				</div>
				<Footer />
			</div>
		)
	}
}