import React, { useState, useEffect } from "react";

const Anime = () => {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPopularAnime = async () => {
    setIsLoading(true);
    const response = await fetch("https://api.jikan.moe/v4/top/anime");
    const data = await response.json();

    setAnimeList(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getPopularAnime();
  }, []);

  console.log(animeList);

  return (
    <div className="container mx-auto">
      <h3 className="text-3xl mb-6">Popular Anime</h3>
      <div className="grid gap-4 grid-cols-9">
        {isLoading
          ? "loading..."
          : animeList.data.map((item) => (
              <div className="hover:text-blue-600">
                <img
                  className="rounded h-52 w-full cursor-pointer "
                  src={item.images.jpg.image_url}
                  alt={item.title}
                />
                <h4 className="mt-2 text-opacity-50 truncate ">{item.title}</h4>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Anime;
