import React, { Component } from 'react';
import { init } from 'ityped';
import style from './intro.css';




export default class Intro extends Component {
	componentDidMount() {
		init(`#element1`, {
			strings: ['《得意忘形》是一个主张追求个体自由与探寻真理的媒体计划', '带着对生命的有限性与无目的性的敬畏', '我们试图为读者与听众提供更全面的觉察自我与认知世界的工具', '以不断重建当下的方式', '穿越时间、抵达生活的本质。'],
			typeSpeed: 150, //default
			backSpeed: 30, //default
			startDelay: 500, //default
			backDelay: 500, //default
			loop: false, //default    
			showCursor: true, //default    
			cursorChar: "|", //default
			onFinished: function(){}
		});
	}
	render() {
		
		return (
			<div className={style.intro}>
				<span id="element1" className={style.aniText}></span>
			</div>
		)
	}
}