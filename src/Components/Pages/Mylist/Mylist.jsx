import React from "react";
import "./Mylist.css";
import Sidebar from "../../Layout/Sidebar/Sidebar";
import Movieslist from "../../Layout/MovieCard/MovieCard";
import Meta from "../../utils/Meta";

const Mylist = () => {
  
  const myList = JSON.parse(localStorage.getItem("myList")) || [];

  return (
    <>
    <Meta title={"My List"} />
    <div className="mylist-container">
      <Sidebar />
      <div className="mylist">
        <h1>My Lists</h1>
        <div className="list">
          {myList && myList.length > 0 ? (
            myList.map((movie) => (
              <Movieslist key={movie.imdbID} movie={movie} />
            ))
          ) : (
            <div className="empty-list">
              <h2>Your list is empty!</h2>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default Mylist;
