import React, { Component } from 'react';
import './podcast-card.css';

export default class PodcastCard extends Component {
	render() {
		return (
			<div>
				<img className="coverImg" src="//cdnimg103.lizhi.fm/radio_cover/2017/01/17/2579961550969129476_320x320.jpg" alt="" />
				<div>
					<div>#41 死亡是凉爽的夜晚</div>
					<div>
						这是《得意忘形》播客的第 41 期节目。这期节目我又和之前来过节目的中二怪老师重聚。在一起看完了《CoCo》这个电影，以及二怪老师正好从墨西哥亡灵节归来之后，我们坐下来聊了聊「死亡」这件事。我们从墨西哥人民如何笑着面对死亡开始，聊到了不同文化对死亡的面对方式、文学里各种关于死亡的意象、以及人在有限生命下如何达到不朽。本期节目里你可以听到：* 很多很多关于死亡的调侃与思考扩展阅读：* 博尔赫斯与海涅音乐（本期的音乐和全部剪辑均由中二怪老师操刀）：* Acercate Mas by Gérard Darmon* Remember Me (Lullaby) by Gabriella Flores, Libertad García Fonzi, Gael Garcia Bernal* Hang on Little Tomato by Pink Martini* Rico Vacilon by Rubén González* Canción Para Santiago de Cuba by 小野リサ* Watching The Boats With My Dad by Buckethead* I'll Try Anything Once by the Strokes节目简介：《得意忘形》是一个主张追求个体自由与探寻真理的媒体计划。我们见证了第一次工业革命以来科技对人类社会的极大推动与助益，但也意识到资本主义与市场经济不可避免地催生了消费文化、剥夺了个人价值、并窃取了大众时间。带着对生命的有限性与无目的性的敬畏，我们试图为读者与听众提供更全面的觉察自我与认知世界的工具，以不断重建当下的方式穿越时间、抵达生活的本质。
					</div>
				</div>
			</div>
		)
	}
}