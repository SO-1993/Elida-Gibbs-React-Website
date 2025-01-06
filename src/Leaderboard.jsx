import React from "react";

function Leaderboard() {
  const handleClick = (e) => {
    console.log(e.target);
  };
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
        <button onClick={handleClick} data-id="clean-sheets">
          Clean Sheets
        </button>
        <button onClick={handleClick} data-id="yellow-cards">
          Yellow Cards
        </button>
        <button onClick={handleClick} data-id="red-cards">
          Red Cards
        </button>
      </div>
    </div>
  );
}

export default Leaderboard;
