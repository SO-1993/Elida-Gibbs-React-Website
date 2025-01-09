import React, { useState } from "react";
import Profiles from "./Profiles";
import { players } from "../database.js";

function Leaderboard() {
  const [sortBy, setSortBy] = useState("position");
  const [filterBy, setFilterBy] = useState("");

  // Sort players based on selected filter criteria (initially position)
  const sortedPlayers = [...players].sort((a, b) => {
    if (sortBy === "position") {
      const positionOrder = { Goalkeeper: 1, Defender: 2, Attacker: 3 };
      return positionOrder[a.position] - positionOrder[b.position];
    } else {
      return b[sortBy] - a[sortBy];
    }
  });

  // Filter players based on selected filter criteria
  const filteredPlayers = sortedPlayers.filter((player) => {
    if (filterBy === "" || filterBy === "all") {
      return true;
    } else if (filterBy === "appearances") {
      return player.appearances > 0;
    } else if (filterBy === "goals") {
      return player.goals > 0;
    } else if (filterBy === "assists") {
      return player.assists > 0;
    } else if (filterBy === "cleanSheets") {
      return player.cleanSheets > 0;
    } else if (filterBy === "yellowCards") {
      return player.yellowCards > 0;
    } else if (filterBy === "redCards") {
      return player.redCards > 0;
    } else if (filterBy === "manOfTheMatch") {
      return player.manOfTheMatch > 0;
    }
    return true;
  });

  // Handle button click to either sort or filter
  const handleClick = (e) => {
    const clickedId = e.target.dataset.id;
    if (
      clickedId === "all" ||
      clickedId === "appearances" ||
      clickedId === "goals" ||
      clickedId === "assists" ||
      clickedId === "cleanSheets" ||
      clickedId === "yellowCards" ||
      clickedId === "redCards" ||
      clickedId === "manOfTheMatch"
    ) {
      setFilterBy(clickedId); // Set filter criteria
    } else {
      setSortBy(clickedId); // Set sorting criteria
    }
  };

  return (
    <div className="board">
      <h1 className="Leaderboard">Leaderboard</h1>
      <div className="statistic">
        <button onClick={handleClick} data-id="all">
          All
        </button>
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
        <button onClick={handleClick} data-id="manOfTheMatch">
          MOTM
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
          {filteredPlayers.map((player, index) => (
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
