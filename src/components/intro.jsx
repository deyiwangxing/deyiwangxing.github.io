import React, { Component } from 'react';
import { init } from 'ityped';
import './intro.css';

export default class Intro extends Component {
	componentDidMount() {
		init(`#ele1`, {
			strings: ['《得意忘形》是一个主张追求个体自由与探寻真理的媒体计划', '带着对生命的有限性与无目的性的敬畏', '我们试图为读者与听众提供更全面的觉察自我与认知世界的工具', '以不断重建当下的方式穿越时间', '抵达生活的本质'],
			typeSpeed: 180,
			backSpeed: 60,
			startDelay: 500,
			backDelay: 2500,
			loop: false,    
			showCursor: true,    
			cursorChar: "|",
			onFinished: function(){}
		});
	}
	render() {
		
		return (
			<div className="intro">
				<div className="textCover">
					<span id="ele1" className="aniText"></span>
				</div>
			</div>
		)
	}
}