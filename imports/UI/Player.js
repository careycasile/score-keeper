import React from 'react';
import {Players} from './../api/players';

export default class Player extends React.Component {
  render() {
    let itemClassName = `item item--position-${this.props.player.rank}`;
    return (
      <div className='item' className={itemClassName}>
        <div className='player'>
          <div>
            <h3 className='player__name'>{this.props.player.name}</h3>
            <p className='player__points'>
              {this.props.player.position} Place, {this.props.player.score} point(s)
            </p>
          </div>
          <div className='player__actions'>
            <p>
            	<button className='button button--round' onClick={() => {
            		Players.update({'_id': this.props.player._id}, {
            			$inc: {score: 1}
            		});
            	}}>+1</button>
            	<button className='button button--round' onClick={() => {
                if (this.props.player.score > 0) {
              		Players.update({'_id': this.props.player._id}, {
              			$inc: {score: -1}
              		});
                };
            	}}>-1</button>
            	<button className='button button--round' onClick={() => Players.remove(this.props.player._id)}>X</button>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

Player.propTypes = {
  player: React.PropTypes.object.isRequired
};
