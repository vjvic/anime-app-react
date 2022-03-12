import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AnimeItem from "./AnimeItem";

const Results = () => {
  const { name } = useParams();

  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getResults = async () => {
    setIsLoading(true);
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${name}`);
    const data = await response.json();

    setAnimeList(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getResults();
  }, [name]);

  return (
    <div className="container mx-auto">
      <div className="grid gap-4 grid-cols-9">
        {isLoading
          ? "loading..."
          : animeList.data.map((item) => (
              <AnimeItem item={item} key={item.mal_id} />
            ))}
      </div>
    </div>
  );
};

export default Results;
