import React from "react";
import { Landing } from "../components/Home/Landing";
import { Collections } from "../components/Home/Collections";
import { Container } from "../components/Home/Container";
import { Creaters } from "../components/Home/Creaters";
import { Tournament } from "../components/Home/Tournament";

export const Home = () => {
  return (
    <div>
      <Landing />
      <Tournament/>
      <div className="secondary-font text-gray-800 text-4xl w-1/2 text-center mt-20 mx-auto uppercase relative">
        play without limits
      </div>
      <p className="text-center items-center mt-6 text-gray-600 w-1/2 mx-auto">
        Yariscore.me gives you to play games into your browser without
        downloading it, You can play solo games as well multiplayer games with
        your friends so take a look and enjoy without worry.
      </p>
      <Collections />
      <Container />
      <Creaters />
    </div>
  );
};
