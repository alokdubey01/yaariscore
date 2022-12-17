import React, { useState } from "react";
import Layout from "./Layout";
import { checkWinner } from "./Winner";

const styles = {
  width: "200px",
  margin: "20px auto",
};
const pStyle = {
  color: "green",
};

function Game() {
  const [layout, setLayout] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = checkWinner(layout);

  const handleClick = (i) => {
    const layoutState = [...layout];
    if (winner || layoutState[i]) return;
    layoutState[i] = xIsNext ? "X" : "O";
    setLayout(layoutState);
    setXisNext(!xIsNext);
  };
  return (
    <React.Fragment>
      <Layout boxes={layout} onClick={handleClick} />
      <div style={styles}>
        <p style={pStyle}>
          {winner
            ? "Winner: " + winner
            : "Next Player " + (xIsNext ? "X" : "O")}
        </p>
      </div>
    </React.Fragment>
  );
}
export default Game;
