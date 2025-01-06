import React from "react";

function Profiles() {
  return <div className="profile">{Item()}</div>;
}

function Item() {
  return (
    <div className="flex">
      <div className="item">
        <img
          src="utils/images/goalkeeper-placeholder.jpg"
          alt="goalkeeper-placeholder-image"
        />
        <div className="info">
          <h3 className="player-name">Name</h3>
          <span className="player-position">Position</span>
        </div>
      </div>
    </div>
  );
}

export default Profiles;
