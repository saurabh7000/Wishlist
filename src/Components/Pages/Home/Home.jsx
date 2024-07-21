import React from "react";
import "./Home.css";
import Sidebar from "../../Layout/Sidebar/Sidebar";
import Mainpage from "../../Layout/Mainpage/Mainpage";
import Meta from "../../utils/Meta";

const Home = () => {
  return (
    <>
      <Meta title={"Home"} />
      <div className="home_container">
        <Sidebar />
        <Mainpage />
      </div>
    </>
  );
};

export default Home;
