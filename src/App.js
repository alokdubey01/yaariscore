import React, {useEffect, useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WithNav } from "./router/WithNav";
import WithoutNav from "./router/WithoutNav";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { News } from "./pages/News";
import { Share } from "./pages/Share";
import { Help } from "./pages/Help";
import Cube from "./games/Cube";
import Twenty48 from "./games/Twenty48";
import Car from "./games/Car";
import Tower from "./games/Tower";
import Maze from "./games/Maze";
import Tetris from "./games/Tetris";
import Login from "./pages/Login";
import RedBall from "./games/RedBall";
import MemoryIt from "./games/MemoryIt";
import Astray from "./games/Astray";
import Aviator from "./games/Aviator";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [progress, setProgress] = useState(10)

  return (
    <>
      <Router>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
          <Route element={<WithNav />}>
            <Route path="/" element={<Home />} exact />
            <Route path="/store" element={<Store />} />
            <Route path="/news" element={<News />} />
            <Route path="/share" element={<Share />} />
            <Route path="/help" element={<Help />} />
          </Route>

          {/* Without Navbar */}
          <Route element={<WithoutNav />}>
            <Route path="/login" element={<Login/>}/>
            {/* Games path are below */}
            <Route path="/games/cube" element={<Cube />} />
            <Route path="/games/2048" element={<Twenty48 />} />
            <Route path="/games/car" element={<Car />} />
            <Route path="/games/tower" element={<Tower />} />
            <Route path="/games/maze" element={<Maze />} />
            <Route path="/games/tetris" element={<Tetris />} />
            <Route path="/games/redball" element={<RedBall />} />
            <Route path="/games/memoryit" element={<MemoryIt />} />
            <Route path="/games/astray" element={<Astray />} />
            <Route path="/games/aviator" element={<Aviator />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
