import React, { useState } from "react";
import "./GameCard.css";
import GameModal from "./GameModal";

const GameCard = ({ title, category, description, price }) => {
  const [showGameModal, setGameModal] = useState(false);
  return (
    <div className="game-card">
      <h2>{title}</h2>
      <p>{category}</p>
      <p>US$ {price}</p>
      <button onClick={() => setGameModal(true)}>Buy</button>
      <GameModal
        show={showGameModal}
        close={() => setGameModal(false)}
        title={title}
        category={category}
        description={description}
        price={price}
      />
    </div>
  );
};

export default GameCard;
