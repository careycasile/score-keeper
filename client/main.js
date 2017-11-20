import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [{
	_id: 1,
	name: 'Carey',
	score: 0
},{
	_id: 2,
	name: 'Sarah',
	score: 0
},{
	_id: 3,
	name: 'Chris',
	score: 0
}];

const renderPlayers = function (players) {

		return players.map(function(player){
			return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
		});
}

Meteor.startup(function () {
	let name = 'Chip';
	let title = 'This is a title';
	let jsx = (
		<div>
			<h1>{title}</h1>
			<p>Hello {name}</p>
			<p>This is the second paragraph</p>
			{renderPlayers(players)}
		</div>
	);
	ReactDOM.render(jsx, document.getElementById('app'));
});
