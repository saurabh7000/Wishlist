import React from "react";
import "./MovieCard.css";
import Rating from "../../utils/Rating";
import CardIcons from "../../utils/CardIcons";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Default_Poster from "../../../Images/Default_Poster.jpg";
const Movieslist = ({ movie }) => {
  const navigate = useNavigate();
  const { Title, Year, imdbRating, Poster, imdbID } = movie;
  const rating = imdbRating * 10 || 0;
  const title = Title || "NA";
  const year = Year || 0;
  const poster = Poster || Default_Poster;

  const navigateToMovie = () => {
    let user = JSON.parse(localStorage.getItem("userInfo"));
    if (!user) {
      toast.error("Please login to access this resource !", {
        position: "top-center",
      });
      navigate("/login");
    } else {
      if (imdbID) {
        navigate(`/watchlists/movie/${imdbID}`);
      } else {
        toast.error("something went wrong.Please try again!");
      }
    }
  };

  return (
    <div className="card-container">
      <div className="card" onClick={navigateToMovie}>
        <div className="poster">
          <img src={poster} alt="poster" className="posterImage" />
          <CardIcons movie={movie} />
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
