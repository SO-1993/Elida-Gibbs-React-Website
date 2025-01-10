import React, { useState } from "react";
import { players } from "../database.js";

function Leaderboard() {
  const [filterBy, setFilterBy] = useState("all");

  // Map to define user-friendly titles for columns
  const columnTitles = {
    appearances: "Appearances",
    goals: "Goals",
    assists: "Assists",
    cleanSheets: "Clean Sheets",
    yellowCards: "Yellow Cards",
    redCards: "Red Cards",
    manOfTheMatch: "Man of the Match",
  };

  // Filter and sort players dynamically
  const filteredPlayers = [...players]
    .filter((player) => {
      if (filterBy === "all") return true; // Show all players
      return player[filterBy] > 0; // Show only players with > 0 for the selected stat
    })
    .sort((a, b) => {
      if (filterBy === "all") {
        // Default sorting by position order if no specific filter
        const positionOrder = {
          Goalkeeper: 1,
          Defender: 2,
          Midfielder: 3,
          Attacker: 4,
        };
        return positionOrder[a.position] - positionOrder[b.position];
      } else {
        // Sort in descending order of the selected stat
        return b[filterBy] - a[filterBy];
      }
    });

  // Handle button click to filter players
  const handleClick = (e) => {
    const clickedId = e.target.dataset.id;
    if (clickedId) {
      setFilterBy(clickedId);
    }
  };

  return (
    <div className="leaderboard-container">
      <div className="board">
        <h1 className="Leaderboard">Leaderboard</h1>
        <div className="statistic">
          <button
            onClick={handleClick}
            data-id="all"
            className="statistic-button"
          >
            All
          </button>
          <button
            onClick={handleClick}
            data-id="appearances"
            className="statistic-button"
          >
            Appearances
          </button>
          <button
            onClick={handleClick}
            data-id="goals"
            className="statistic-button"
          >
            Goals
          </button>
          <button
            onClick={handleClick}
            data-id="assists"
            className="statistic-button"
          >
            Assists
          </button>
          <button
            onClick={handleClick}
            data-id="cleanSheets"
            className="statistic-button"
          >
            Clean Sheets
          </button>
          <button
            onClick={handleClick}
            data-id="yellowCards"
            className="statistic-button"
          >
            Yellow Cards
          </button>
          <button
            onClick={handleClick}
            data-id="redCards"
            className="statistic-button"
          >
            Red Cards
          </button>
          <button
            onClick={handleClick}
            data-id="manOfTheMatch"
            className="statistic-button"
          >
            MOTM
          </button>
        </div>
      </div>

      <div>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              {filterBy !== "all" && <th>{columnTitles[filterBy]}</th>}
              {filterBy === "all" && (
                <>
                  <th>Appearances</th>
                  <th>Goals</th>
                  <th>Assists</th>
                  <th>Clean Sheets</th>
                  <th>Yellow Cards</th>
                  <th>Red Cards</th>
                  <th>MOTM</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {filteredPlayers.map((player, index) => (
              <tr key={index}>
                <td>
                  <div className="player-name-with-image">
                    <h4 className="player-name">{player.name}</h4>
                    <img
                      src={player.img}
                      alt={player.name}
                      className="player-image"
                    />
                  </div>
                </td>
                <td>{player.position}</td>
                {filterBy !== "all" && <td>{player[filterBy]}</td>}
                {filterBy === "all" && (
                  <>
                    <td>{player.appearances}</td>
                    <td>{player.goals}</td>
                    <td>{player.assists}</td>
                    <td>{player.cleanSheets}</td>
                    <td>{player.yellowCards}</td>
                    <td>{player.redCards}</td>
                    <td>{player.manOfTheMatch}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
