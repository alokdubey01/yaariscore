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
        <div className="flex flex-wrap w-full mt-12">
          {/* {games.map((game) => (
            <a href={game.info.url}>
              <div className="profile-card-2">
                <img src={Cube} alt="game" className="img img-responsive" />
                <div className="profile-name">{game.name}</div>
                <div className="profile-username">{game.info.author}</div>
              </div>
            </a>
          ))} */}

          <div className="wrapper">
            <h2>
              <strong>
                All Games<span></span>
              </strong>
            </h2>
            <div className="cards">
              {games.map((game) => (
                <div>
                  <a href={game.info.url}>
                    <figure className="card">
                      <img src={game.info.image} alt="im" />
                      <figcaption className="name">{game.name}</figcaption>
                      <figcaption className="author">
                        {game.info.author}
                      </figcaption>
                    </figure>
                  </a>
                </div>
              ))}
            </div>

            <h2>
              <strong>What's new?</strong>
            </h2>

            <div className="news">
              <figure className="article">
                <img src="https://www.linkpicture.com/q/news1_1.jpg" />

                <figcaption>
                  <h3>New Item</h3>

                  <p>
                    In today’s update, two heads are better than one, and three
                    heads are better than that, as the all-new Flockheart’s
                    Gamble Arcana item for Ogre Magi makes its grand debut.
                  </p>
                </figcaption>
              </figure>

              <figure className="article">
                <img src="https://www.linkpicture.com/q/news2.png" />

                <figcaption>
                  <h3>Update</h3>

                  <p>
                    Just in time for Lunar New Year and the Rat’s time in the
                    cyclical place of honor, the Treasure of Unbound Majesty is
                    now available.
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
//    <div>
//    <a href="" className="card">
//      <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
//      <div className="card__overlay">
//        <div className="card__header">
//          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
//            <path />
//          </svg>
//          {/* <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
//          <div className="card__header-text">
//            <h3 className="card__title">Jessica Parker</h3>
//            <span className="card__status">@alokdubey</span>
//          </div>
//        </div>
//        <p className="card__description">Play</p>
//      </div>
//    </a>
//  </div>

// <div className="flex-shrink-0 m-2 w-52 h-52 relative overflow-hidden profile-card-2 bg-purple-500 rounded-lg shadow-lg">
//   <svg
//     className="absolute bottom-0 left-0 mb-8"
//     viewBox="0 0 375 283"
//     fill="none"
//     style={{ transform: "scale(1.5)", opacity: 0.1 }}
//   >
//     <rect
//       x="159.52"
//       y="175"
//       width="152"
//       height="152"
//       rx="8"
//       transform="rotate(-45 159.52 175)"
//       fill="white"
//     />
//     <rect
//       y="107.48"
//       width="152"
//       height="152"
//       rx="8"
//       transform="rotate(-45 0 107.48)"
//       fill="white"
//     />
//   </svg>
//   <div className="relative pt-10 px-10 flex items-center justify-center">
//     <div
//       className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
//       style={{
//         background: "radial-gradient(black, transparent 60%)",
//         transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
//         opacity: 0.2,
//       }}
//     ></div>
//     <img className="img img-responsive relative w-32 -m-3 -mt-6" src={Cube} alt="" />
//   </div>
//   <div className="relative text-white px-6 pb-6 mt-5">
//     {/* <span className="block opacity-75 -mb-1">Outdoor</span> */}
//     <div className="flex justify-between">
//       <span className="block font-semibold text-xl profile-name">Oak Tree</span>
//       <span className="profile-username">{game.info.author}</span>
//       <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-5 py-0.5 leading-none flex items-center cursor-pointer">
//         Play
//       </span>
//     </div>
//   </div>
// </div>
