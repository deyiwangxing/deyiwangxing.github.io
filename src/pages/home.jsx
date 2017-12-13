import React, { Component } from 'react';
import NavBar from '../components/nav-bar';
import Intro from '../components/intro';
import PodcastCard from '../components/podcast-card';
import Footer from '../components/footer';
import './home.css';

export default class Home extends Component {
	render() {
		const arr = [0, 1, 2, 3, 4, 5, 6, 8, 9, 0];
		return (
			<div className="content">
				<NavBar />
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