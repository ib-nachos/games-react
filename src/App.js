import React, { useState, useEffect } from "react";
import GameCard from "./components/GameCard/GameCard";
import { fetchGames } from "./api/gameApi";

const App = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchGames();
      setGames(response?.games);
    };
    fetchData();
  }, []);

  return (
    <div>
      {games.map(({ id, title, category, description, price }) => (
        <GameCard
          key={id}
          title={title}
          category={category}
          description={description}
          price={price}
        />
      ))}
    </div>
  );
};

export default App;
