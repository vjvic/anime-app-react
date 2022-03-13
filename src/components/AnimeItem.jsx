import React from "react";
import { useNavigate } from "react-router-dom";

const AnimeItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      className="hover:text-blue-600"
      onClick={() => navigate(`/details/${item.mal_id}`)}
    >
      <img
        className="rounded h-52 w-full cursor-pointer "
        src={item.images.jpg.image_url}
        alt={item.title}
      />
      <h4 className="mt-2 text-opacity-50 truncate ">{item.title}</h4>
    </div>
  );
};

export default AnimeItem;
