import Home from "./pages/Home";
import { useState } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import Navbar from "./pages/navbar";

import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [bookmark, setBookmark] = useState([]); //for bookmarks
  const [bookmarkList, setBookmarkList] = useState([]);
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/hiro" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
