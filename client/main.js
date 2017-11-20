import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';

const renderPlayers = function (players) {

		return players.map(function(player){
			return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
		});

}

Meteor.startup(function () {

	Tracker.autorun(function () {
		let players = Players.find().fetch();
		console.log(players);

		let title = 'Score Keep';
		let jsx = (
			<div>
				<h1>{title}</h1>
				{renderPlayers(players)}
			</div>
		);
		ReactDOM.render(jsx, document.getElementById('app'));
	});

	let userInput = prompt('input your name:');
	Players.insert({
		name: userInput,
		score: 0
	});
});
