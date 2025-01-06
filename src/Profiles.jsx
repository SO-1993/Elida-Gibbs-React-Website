import React from "react";

function Profiles({ players }) {
  return (
    <div className="profile">
      {players.map((player, index) => (
        <div className="flex" key={index}>
          <div className="item">
            <img src={player.img} alt={`${player.name}'s avatar`} />
            <div className="info">
              <h3 className="player-name">{player.name}</h3>
              <span className="player-position">{player.position}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Profiles;
