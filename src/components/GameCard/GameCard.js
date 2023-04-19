import React from "react";
import "./GameCard.css";
  
const GameCard = ({title, category, price}) => {
    return (
        <div className="game-card">
            <h2>
                {title}
            </h2>
            <p>
                {category}
            </p>
            <p>
                US$ {price}
            </p>
        </div>
    )
}

export default GameCard;