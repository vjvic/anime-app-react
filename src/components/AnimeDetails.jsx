import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "./Button";

const AnimeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [animeDets, setAnimeDets] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getDetails = async () => {
    setIsLoading(true);
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    const data = await response.json();

    setAnimeDets(data.data);
    setIsLoading(false);
  };

  const scoreColor = (score) => {
    if (score >= 8) {
      return "text-green-500";
    } else if (score >= 5) {
      return "text-orange-500";
    } else {
      return "text-red-500";
    }
  };

  console.log(animeDets);

  useEffect(() => {
    getDetails();

    /* eslint-disable */
  }, [id]);

  if (isLoading) return <div className="container mx-auto">loading...</div>;

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3">
        <div>
          <img
            src={animeDets.images.jpg.large_image_url}
            alt={animeDets.title}
            className="rounded w-2/4"
          />
        </div>

        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-2xl ">{animeDets.title}</h3>
            <p className={scoreColor(animeDets.score)}>{animeDets.score}</p>
          </div>

          <p className="mb-4">
            <span className="font-bold">Genre:</span>{" "}
            <span className="text-gray-600">
              {animeDets.genres.map((genre) => genre.name).join(" ")}
            </span>
          </p>
          <p>
            <span className="font-bold">Synopsis</span>
            <br /> <span className="text-gray-600">{animeDets.synopsis}</span>
          </p>

          <div className="mt-5">
            <Button text={"Back"} click={() => navigate("/")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
