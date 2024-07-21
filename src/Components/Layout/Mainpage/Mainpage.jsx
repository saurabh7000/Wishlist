import React, { useEffect, useState } from "react";
import "./Mainpage.css";
import SearchIcon from "@mui/icons-material/Search";
import Movieslist from "../MovieCard/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getMovies } from "../../../Redux/Actions";
import { toast } from "react-toastify";
import Loading from "../../utils/Loading";
import { useNavigate } from "react-router-dom";

const Mainpage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const { loading, movies } = useSelector((state) => state.movies);

  useEffect(() => {
    if (movies && movies.Error) {
      toast.error(movies.Error, { position: "top-center" });
      dispatch(clearErrors());
      navigate("/");
    }
  }, [dispatch,movies, movies.Error, navigate]);

  const handleSearch = () => {
    if (!title) {
      toast.warn("Please enter movie title !", {
        position: "top-center",
      });
    } else {
      dispatch(getMovies(title));
    }
  };



  return (
    <div className="main-container">

      <div className="main-info">
        <h1>Welcome to Watchlists</h1>
        <p>
          Browse movies , add them to watchlists and share with them with
          friends
        </p>
        <p>
          Just click the &#10010; to add a movie , click the &#10006; to remove
          the movie and the poster to see more details and click on &#10004; to
          mark or unmark the movie as watched
        </p>
      </div>

      <div className="search">
        <SearchIcon className="icons" />
        <input
          type="text"
          placeholder="Search"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="movies-container">
        {loading ? (
          <div className="empty-search">
            <Loading />
            <p>Please wait..!</p>
          </div>
        ) : loading === false && !movies.Error ? (
          <Movieslist movie={movies} />
        ) : (
          <div className="empty-search"></div>
        )}
      </div>
    </div>
  );
};

export default Mainpage;
