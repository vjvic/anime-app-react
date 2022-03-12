import React from "react";

const AnimeItem = ({ item }) => {
  return (
    <div className="hover:text-blue-600">
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
