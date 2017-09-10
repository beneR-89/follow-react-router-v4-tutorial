import React from 'react';
import PropTypes from 'prop-types';

import PlayerAPI from './../PlayerAPI/PlayerAPI';

const Player = (props) => {
  const player = PlayerAPI.get(
    parseInt(props.match.params.number, 10),
  );
  if (!player) {
    return (<div>Sorry, but the player was not found</div>);
  }
  return (
    <div>
      <h1>{player.name} (#{player.number})</h1>
      <h2>{player.position}</h2>
    </div>
  );
};

Player.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      number: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Player;
