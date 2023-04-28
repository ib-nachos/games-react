import React, { createContext } from "react";
import ModalAndButton from "../Modal/ModalAndButton";
import "./GameCard.css";

export const GameContext = createContext({});

const GameCard = ({ title, category, price, description }) => {
  const game = {
    title,
    category,
    price,
    description,
  };

  return (
    <GameContext.Provider value={game}>
      <div className="game-card">
        <h2>{title}</h2>
        <p>{category}</p>
        <p>US$ {price}</p>
        <ModalAndButton />
      </div>
    </GameContext.Provider>
  );
};

export default GameCard;
