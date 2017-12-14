import React, { Component } from 'react';
import './podcast-card.css';

export default class PodcastCard extends Component {
	render() {
		return (
			<div className="podcastCard">
				<img className="cardImg" src="https://ws1.sinaimg.cn/large/8700af19ly1fmd56zm2nej218g0p0teb" alt="" />
				<div className="cardText">
					<div className="titleText">#42：我们仍在故事的中途</div>
					<div className="introText">这是《得意忘形》播客的第 42 期节目。本期节目的嘉宾是之前来作客过的，我的好朋友康堤老师。不过之前的节目她都是作为采访和辅助的角色，而这次我们终于可以坐下来一起聊聊她最擅长也最感兴趣的话题：叙事学。在这期节目里，我们从「storytelling」的重要性讲起，谈了谈故事的结构、种类、发展变化，还有人类如今在不同形式里——文学、电影、游戏、真人秀——的叙事水平都达到了怎样的程度。最后，我们当然再次回到了人生在世无法回避的那些问题：关于创作、体验、感受与存在的意义。</div>
				</div>
			</div>
		)
	}
}