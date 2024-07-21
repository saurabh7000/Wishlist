import React, { useEffect, useMemo, useState } from "react";
import "./Movie.css";
import Sidebar from "../../Layout/Sidebar/Sidebar";
import Rating from "../../utils/Rating";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieInfo } from "../../../Redux/Actions";
import Meta from "../../utils/Meta";
import Loading from "../../utils/Loading";
import { toast } from "react-toastify";
import Default_Poster from "../../../Images/Default_Poster.jpg";

const Movie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    if (!id) {
      toast.error("Something went wrong.Please try again!");
      navigate("/");
    } else {
      dispatch(getMovieInfo(id));
    }
  }, [dispatch, id, navigate]);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("myList")) || [];
    setMyList(storedList);
  }, []);

  const { loading, movie } = useSelector((state) => state.movieInfo);

  let title = "NA";
  let year = 0;
  let rating = 0;
  let poster = Default_Poster;
  let plot = "NA";

  if (movie) {
    title = movie.Title;
    year = movie.Year;
    rating = movie.imdbRating * 10;
    poster = movie.Poster;
    plot = movie.Plot;
  }

  const checkIdPresentInMylist = useMemo(() => {
    if (myList) return myList.some((list) => list.imdbID === id);
  }, [myList, id]);

  const addMovieToMyList = (e) => {
    e.stopPropagation();
    if (!checkIdPresentInMylist) {
      const updatedList = [...myList, movie];
      setMyList(updatedList);
      localStorage.setItem("myList", JSON.stringify(updatedList));
    }
    toast.success("Movie added to My List successfully.", {
      position: "top-center",
    });
  };

  const removeMovieFromMyList = (e) => {
    e.stopPropagation();
    const updatedList = myList.filter((list) => list.imdbID !== movie.imdbID);
    setMyList(updatedList);
    localStorage.setItem("myList", JSON.stringify(updatedList));
    toast.success("Movie removed from My List successfully.", {
      position: "top-center",
    });
    window.location.reload();
  };

  return (
    <>
      <Meta title={"Movie Details"} />

      {loading ? (
        <div className="empty-search">
          <Loading />
          <p>Please wait...!</p>
        </div>
      ) : (
        <div className="movie-container">
          <Sidebar />
          <div className="movie-box">
            <div className="movie">
              <div className="movie-poster">
                <img src={poster} alt="poster" />
              </div>

              <div className="movie-info">
                <h2>{title} </h2>
                <h4>({year})</h4>

                <div className="movie-rating">
                  <Rating rating={rating} />
                  <h3>{rating}</h3>
                  <h4>/100</h4>
                </div>

                <button className="watch-btn">Watch</button>
                {checkIdPresentInMylist ? (
                  <button className="add-btn" onClick={removeMovieFromMyList}>
                    Remove from My List
                  </button>
                ) : (
                  <button className="add-btn" onClick={addMovieToMyList}>
                    Add to My List
                  </button>
                )}
              </div>
            </div>
            <div className="movie-summary">
              <h2>Movie summary :-</h2>
              <p>{plot}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;
