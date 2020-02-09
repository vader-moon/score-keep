import React from 'react';
import PropTypes from 'prop-types'; 
import Player from './Player';
import FlipMove from 'react-flip-move';

export default class PlayerList extends React.Component {
  renderPlayers() {
    if(this.props.players.length > 0) {
      return this.props.players.map(el => <Player key={el._id} player={el}/>);
    } else {
      return (
        <div className="item">
          <p className="item__message">Add Your First Player to Get Started!</p>
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
            {this.renderPlayers()}
        </FlipMove>
      </div>
        
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
}