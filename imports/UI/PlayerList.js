import React from 'react';
import Player from './Player';
import FlipMove from 'react-flip-move';

export default class PlayerList extends React.Component {
  renderPlayers() {

    if (this.props.players.length === 0) {
      return (
        <div className='item'>
          <p className='item__message'>Please Enter Your First Player</p>
        </div>
      );
    }

    return this.props.players.map((player) => {
      return <Player key={player._id} player={player}/>;
    });
  }

  render() {
    return (
      <div>
        <FlipMove duration={750} easing="ease-out">
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
}

PlayerList.propTypes = {
  players: React.PropTypes.array.isRequired
};
