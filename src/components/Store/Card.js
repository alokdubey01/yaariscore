import React from "react";
import "./Card.css";
import img  from "../../static/2048.png";

export const Card = () => {
  return (
    <div>
      <a href="/Games/2048/app.html">
        <div class="profile-card-2">
          <img
            src={img}
            alt="game"
            class="img img-responsive"
          />
          <div class="profile-name">2048</div>
          <div class="profile-username">@johndoesurname</div>
        </div>
      </a>
    </div>
  );
};
