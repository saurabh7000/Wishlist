import React, { useEffect, useState } from "react";
import "./Profile.css";
import DP from "../../../Images/blank-profile-picture.png";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Meta from "../../utils/Meta";

const Profile = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
  }, [setUser]);

  const navigate = useNavigate();
  const navigateHome = () => {
    if (!user) {
      toast.error("Please login to access this resource !");
      navigate("/login");
    } else {
      navigate("/");
    }
  };

  const navigateList = () => {
    if (!user) {
      toast.error("Please login to access this resource !");
      navigate("/login");
    } else {
      navigate("/watchlists/mylist");
    }
  };

  const handleLogout = () => {
    if (user) {
      localStorage.removeItem("userInfo");
    } else {
      toast.error("Something went wrong.Please try again !", {
        position: "top-center",
      });
    }
    navigate("/login");
  };

  return (
    <>
      <Meta title={"Profile"} />
      <div className="profile-container">
        <div className="profile-info">
          <img src={DP} alt="DP" />
          <h2>Name :- {user.name}</h2>
          <h2>Email :- {user.email}</h2>

          <div className="btn" id="home" onClick={navigateHome}>
            <HomeIcon className="icons" />
            <h3>Home</h3>
          </div>

          <div className="btn" id="list" onClick={navigateList}>
            <h3>My Lists</h3>
          </div>

          <div className="btn" id="logout" onClick={handleLogout}>
            <h3>Logout</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
