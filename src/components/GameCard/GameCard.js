import React from "react";
import "./GameCard.css";
  
const GameCard = ({title, description, price}) => {
    return (
        <div className="game-card">
            <h2>
                {title}
            </h2>
            <p>
                {description}
            </p>
            <p>
                US$ {price}
            </p>
        </div>
    )
}

export default GameCard;