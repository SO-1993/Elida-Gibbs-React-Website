import React, { useState } from "react";
import Profiles from "./Profiles";
import { players } from "../database.js";

function Leaderboard() {
  const [sortBy, setSortBy] = useState("appearances");

  const handleClick = (e) => {
    setSortBy(e.target.dataset.id);
  };

  const sortedPlayers = [...players].sort((a, b) => b[sortBy] - a[sortBy]);

  return (
    <div className="board">
      <h1 className="Leaderboard">Leaderboard</h1>
      <div className="statistic">
        <button onClick={handleClick} data-id="appearances">
          Appearances
        </button>
        <button onClick={handleClick} data-id="goals">
          Goals
        </button>
        <button onClick={handleClick} data-id="assists">
          Assists
        </button>
        <button onClick={handleClick} data-id="cleanSheets">
          Clean Sheets
        </button>
        <button onClick={handleClick} data-id="yellowCards">
          Yellow Cards
        </button>
        <button onClick={handleClick} data-id="redCards">
          Red Cards
        </button>
      </div>

      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Appearances</th>
            <th>Goals</th>
            <th>Assists</th>
            <th>Clean Sheets</th>
            <th>Yellow Cards</th>
            <th>Red Cards</th>
            <th>MOTM</th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player, index) => (
            <tr key={index}>
              <td>
                <div className="player-name-with-image">
                  <h4>{player.name}</h4>
                  <img
                    src={player.img}
                    alt={player.name}
                    className="player-image"
                  />
                </div>
              </td>
              <td>{player.position}</td>
              <td>{player.appearances}</td>
              <td>{player.goals}</td>
              <td>{player.assists}</td>
              <td>{player.cleanSheets}</td>
              <td>{player.yellowCards}</td>
              <td>{player.redCards}</td>
              <td>{player.manOfTheMatch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
