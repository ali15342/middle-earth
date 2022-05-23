import "../src/css/App.css";
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from "./components/pages/about/About";
import Home from "./components/pages/Home";
import Characters from "./components/pages/characters/Characters";
import MapPage from "./components/pages/MapPage";
import Error404 from "./components/pages/Error404";
import Login from "./components/pages/authentication/Login";
import Register from "./components/pages/authentication/Registration";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/characters" element={<Characters/>}></Route>
      <Route path="/map" element={<MapPage/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="*" element={<Error404/>}></Route>
    </Routes>
    </Router>

  );
}

export default App;
