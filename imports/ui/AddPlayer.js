import React from 'react';
import Players from './../api/players'

export default class AddPlayer extends React.Component {
  addPlayer = function(evt){
    evt.preventDefault();
    const playerName = evt.target.playerName.value;
    if(playerName) {
      evt.target.playerName.value = '';
      Players.insert({
        name: playerName,
        score: 0
      });
    }
  }
  render() {
    return (
      <div className="item">
        <form className="form" onSubmit={this.addPlayer}>
          <input className="form__input" type="text" name="playerName" placeholder="Player Name"/>
          <button className="button">Add Player</button>
        </form> 
      </div>
    )
  }
}

