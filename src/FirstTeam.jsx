import React from "react";

function FirstTeam() {
  return (
    <div className="goalkeepers">
      <h2>Goalkeepers</h2>
      <div className="goalkeeper-list">
        <div className="goalkeeper">
          <p>Adam Fenwick</p>
          <img
            src="utils/images/goalkeeper-placeholder.jpg"
            alt="goalkeeper-placeholder-image"
            className="goalkeeper-avatar"
          />
        </div>
        <div className="goalkeeper">
          <p>James Holding</p>
          <img
            src="utils/images/goalkeeper-placeholder.jpg"
            alt="goalkeeper-placeholder-image"
            className="goalkeeper-avatar"
          />
        </div>
        <div className="goalkeeper">
          <p>Tommy Ford</p>
          <img
            src="utils/images/goalkeeper-placeholder.jpg"
            alt="goalkeeper-placeholder-image"
            className="goalkeeper-avatar"
          />
        </div>
      </div>
      <div className="defenders">
        <h2>Defenders</h2>
      </div>
      <div className="midfielders">
        <h2>Midfielders</h2>
      </div>
      <div className="attackers">
        <h2>Attackers</h2>
      </div>
    </div>
  );
}

export default FirstTeam;
