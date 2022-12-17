import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Store } from "./pages/Store";
import { News } from "./pages/News";
import { Share } from "./pages/Share";
import { Help } from "./pages/Help";
import Game from "./games/Tic-Tak/Game";
import Candy from "./games/Candy/Candy";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/store' element={<Store/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/share' element={<Share/>}/>
          <Route path='/help' element={<Help/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
