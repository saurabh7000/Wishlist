import React from "react";
import "./MovieCard.css";
import Rating from "../../utils/Rating";
import CardIcons from "../../utils/CardIcons";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Default_Poster from "../../../Images/Default_Poster.jpg";
const Movieslist = ({ movie }) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("userInfo");
  const { Title, Year, imdbRating, Poster, imdbID } = movie;

  const rating = imdbRating !== "N/A" ? imdbRating * 10 : "N/A";
  const title = Title || "NA";
  const year = Year !== "N/A" ? movie.Year : "N/A";
  const poster = Poster === "N/A" ? Default_Poster : Poster;

  const navigateToMovie = () => {
    if (imdbID) {
      navigate(`/watchlists/movie/${imdbID}`);
    } else {
      toast.error("something went wrong.Please try again!");
    }
  };

  return (
    <div className="card-container">
      <div className="card" onClick={navigateToMovie}>
        <div className="poster">
          <img src={poster} alt="poster" className="posterImage" />
          {user && <CardIcons movie={movie} />}
        </div>

        <div className="card-info">
          <div className="rating">
            <Rating rating={rating} />
            <h4>{rating}</h4>
            <h5>/100</h5>
          </div>

          <h2 className="title-year">{title}</h2>
          <h4>{year}</h4>
        </div>
      </div>
    </div>
  );
};

export default Movieslist;
