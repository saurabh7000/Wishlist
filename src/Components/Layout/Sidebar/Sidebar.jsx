import React, { useState } from "react";
import "./Sidebar.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import Profile from "../../../Images/blank-profile-picture.png";
import { Menu, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { getMovies } from "../../../Redux/Actions";
import { toast } from "react-toastify";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleSearch = () => {
    if (!title) {
      toast.warn("Please enter movie title !", {
        position: "top-center",
      });
    } else {
      dispatch(getMovies(title));
      navigate("/");
    }
  };

  let user = JSON.parse(localStorage.getItem("userInfo"));

  const navigateHome = () => {
    user = JSON.parse(localStorage.getItem("userInfo"));
    if (!user) {
      toast.error("Please login to access this resource !", {
        position: "top-center",
      });
      navigate("/login");
    } else {
      navigate("/");
    }
  };

  const navigateList = () => {
    user = JSON.parse(localStorage.getItem("userInfo"));
    if (!user) {
      toast.error("Please login to access this resource !", {
        position: "top-center",
      });
      navigate("/login");
    } else {
      navigate("/watchlists/mylist");
    }
  };

  const navigateProfile = () => {
    user = JSON.parse(localStorage.getItem("userInfo"));
    if (!user) {
      toast.error("Please login to access this resource !", {
        position: "top-center",
      });
      navigate("/login");
    } else {
      navigate("/wishlists/profile");
    }
  };

  // Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    const user = localStorage.getItem("userInfo");
    if (user) {
      localStorage.removeItem("userInfo");
      toast.success("Logged out successfully !", {
        position: "top-center",
      });
      navigate("/login");
    }
  };

  return (
    <div className="sidebar-container">

      <div className="logo-container">
        <h1>Watchlists</h1>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="search-icon" onClick={handleSearch}>
          <SearchIcon sx={{ fontSize: "1.9rem" }} />
        </div>
      </div>

      <div className="home-btn" onClick={navigateHome}>
        <HomeIcon className="icons" />
        <h3>Home</h3>
      </div>

      <div className="list-container" onClick={navigateList}>
        <h3>My Lists</h3>
      </div>

      <div className="user-info">
        <div className="info">
          <img src={Profile} alt="user" />
          <h4>{user.name}</h4>
        </div>
        <MoreVertIcon
          className="icons"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}

          sx={{width:"auto",position:"absolute"}}
         
        >
          <MenuItem onClick={handleClose} sx={{width:"auto"}}>
            <h3 className="menu-profile" onClick={navigateProfile}>
              Profile
            </h3>
          </MenuItem>
          <MenuItem sx={{width:"auto"}}>
            <h3 className="menu-logout" onClick={handleLogout}>
              Logout
            </h3>
          </MenuItem>
        </Menu>
      </div>
      
    </div>
  );
};

export default Sidebar;
