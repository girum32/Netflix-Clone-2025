import React, { useEffect, useState } from "react";

import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floar(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    };
  });

  return (
    <div className="banner">
      <div className="banner_content">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </div>
  );
}

export default Banner;
