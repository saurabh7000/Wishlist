import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Meta from "../../utils/Meta";

const Login = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && name) {
      const user = { name, email };
      localStorage.setItem("userInfo", JSON.stringify(user));
      navigate("/");
    }else{
      toast.error("Please enter all the required filleds !", {
        position: "top-center",
      });
    }
  };

  return (
    <>
    <Meta title={"Login"}/>
    <div className="login-container">
      <div className="login-box">
        <h1>Wishlists</h1>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
    </>
  );
};

export default Login;
