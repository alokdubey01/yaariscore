import React, { useState, useEffect } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Cube from "../../static/Cube.svg";
import { Loading } from "../Store/Loading";

export const Card = (props) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:8000/").then((res) => {
      console.log(res.data);
      setGames(res.data);
      setLoading(false);
    });
    setLoading(true);
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap gap-12 mt-12">
          {games.map((game) => (
            <a href={game.info.url}>
              <div className="profile-card-2">
                <img src={Cube} alt="game" className="img img-responsive" />
                <div className="profile-name">{game.name}</div>
                <div className="profile-username">{game.info.author}</div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
