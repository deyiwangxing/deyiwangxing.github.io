import React, { Component } from 'react';
import ReactAplayer from 'react-aplayer';

export default class Podcast extends Component {
	constructor(props) {
    super(props);
    this.state = {};
  }

  playHandler() {
    console.log('on play');
  }

  pauseHandler() {
    console.log('on pause');
  }
	render() {
		const props = {
      "autoplay": true,
      "mutex": true,
      "preload": "metadata",
      "music": {
        "author": "Hans Zimmer/Richard Harvey",
        "url": "http://cdn5.lizhi.fm/audio/2017/12/14/2641384763372974598_ud.mp3",
        "pic": "http://devtest.qiniudn.com/Preparation.jpg"
      }
    };
		return (
			<div>
				<ReactAplayer {...props} onPlay={this.playHandler} onPause={this.pauseHandler}/>
			</div>
		)
	}
}