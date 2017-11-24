import React from 'react';
import {Players} from './../api/players';

export default class Player extends React.Component {
  render() {
    return (
      <div>
        <p>
        {this.props.player.name} has {this.props.player.score} point(s).
      	<button onClick={() => {
      		Players.update({'_id': this.props.player._id}, {
      			$inc: {score: 1}
      		});
      	}}>+1</button>
      	<button onClick={() => {
      		Players.update({'_id': this.props.player._id}, {
      			$inc: {score: -1}
      		});
      	}}>-1</button>
      	<button onClick={() => Players.remove(this.props.player._id)}>X</button>
        </p>
      </div>
    )
  }
}

Player.propTypes = {
  player: React.PropTypes.object.isRequired
};
