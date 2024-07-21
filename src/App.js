import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Movie from "./Components/Pages/Movie/Movie.jsx";
import Mylist from "./Components/Pages/Mylist/Mylist.jsx";
import Login from "./Components/Pages/Login/Login.jsx";
import Profile from "./Components/Pages/Profile/Profile.jsx";
import ProtectedRoute from "./Components/utils/ProtectedRoute.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlists/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/watchlists/movie/:id"
          element={
            <ProtectedRoute>
              <Movie />
            </ProtectedRoute>
          }
        />
        <Route
          path="/watchlists/mylist"
          element={
            <ProtectedRoute>
              <Mylist />
            </ProtectedRoute>
          }
        />
     
      </Routes>
    </Router>
  );
}

export default App;
