import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

Meteor.startup(function () {
	let name = 'Chip';
	let title = 'This is a title';
	let jsx = (
		<div>
			<h1>{title}</h1>
			<p>Hello {name}</p>
			<p>This is the second paragraph</p>
		</div>
	);
	ReactDOM.render(jsx, document.getElementById('app'));
});