import React, {useState, useEffect} from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <div>
      <Link to={props.link}>
        <div className="profile-card-2">
          <img
            src={props.img}
            alt="game"
            className="img img-responsive"
          />
          <div className="profile-name">{props.name}</div>
          <div className="profile-username">{props.author}</div>
        </div>
      </Link>
    </div>
  );
};
