import React, { useState, useEffect, useMemo } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { toast } from "react-toastify";

const CardIcons = ({ movie }) => {
  const [myList, setMyList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [watched, setWatched] = useState(false);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("myList")) || [];
    const storedWatchList =
      JSON.parse(localStorage.getItem("watchedList")) || [];
    setMyList(storedList);
    setWatchList(storedWatchList);
  }, []);

  useEffect(() => {
    localStorage.setItem("watchedList", JSON.stringify(watchList));
    setWatched(watchList.some((list) => list.imdbID === movie.imdbID));
  }, [watchList, movie]);

  const checkIdPresentInMylist = useMemo(() => {
    return myList.some((list) => list.imdbID === movie.imdbID);
  }, [myList, movie]);

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

  const toggleWatched = (e) => {
    e.stopPropagation();
    const isPresent = watchList.some((list) => list.imdbID === movie.imdbID);
    if (isPresent) {
      toast.success("Movie removed from Watched List successfully.", {
        position: "top-center",
      });
      const updatedList = watchList.filter(
        (list) => list.imdbID !== movie.imdbID
      );
      setWatchList(updatedList);
    } else {
      toast.success("Movie added to Watched List successfully.", {
        position: "top-center",
      });
      const updatedList = [...watchList, movie];
      setWatchList(updatedList);
    }
  };

  return (
    <>
      {checkIdPresentInMylist ? (
        <ClearIcon className="add-clear-Icon" onClick={removeMovieFromMyList} />
      ) : (
        <AddSharpIcon className="add-clear-Icon" onClick={addMovieToMyList} />
      )}
      <CheckIcon
        className={watched ? "checkIconTrue" : "checkIconFalse"}
        onClick={toggleWatched}
      />
    </>
  );
};

export default CardIcons;
