import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';
import TitleBar from './../imports/UI/TitleBar';
import AddPlayer from './../imports/UI/AddPlayer';
import Player from './../imports/UI/Player';

const renderPlayers = (players) => {
	return players.map((player) => {
		return <Player key={player._id} player={player}/>;
	});
}

Meteor.startup( () => {

	Tracker.autorun(() => {
		let players = Players.find().fetch();

		let title = 'Score Keep';
		let subTitle = "Chip";
		let jsx = (
			<div>
				<TitleBar title={title} subTitle={subTitle}/>
				<AddPlayer/>
				{renderPlayers(players)}
			</div>
		);
		ReactDOM.render(jsx, document.getElementById('app'));
	});


});
