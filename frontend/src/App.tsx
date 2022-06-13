import "../src/css/App.css";
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/pages/about/About";
import Home from "./components/pages/Home";
import Characters from "./components/pages/characters/Characters";
import MapPage from "./components/pages/MapPage";
import Error404 from "./components/pages/Error404";
import Login from "./components/pages/authentication/Login";
import Register from "./components/pages/authentication/Registration";
import Profile from "./components/pages/Profile";
import YouShallNotPass from "./components/pages/YouShallNotPass";
import Tweets from "./components/pages/Tweets";
import FractionQuizMaster from "./components/pages/fraction/FractionQuizMaster";
import Navbar from "./components/navbar/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/characters"
                    element={
                        localStorage.getItem("jwt") ? (
                            <Characters />
                        ) : (
                            <YouShallNotPass />
                        )
                    }
                />
                <Route path="/map" element={<MapPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/profile"
                    element={
                        localStorage.getItem("jwt") ? (
                            <Profile />
                        ) : (
                            <YouShallNotPass />
                        )
                    }
                />
                <Route
                    path="/tweets"
                    element={
                        localStorage.getItem("jwt") ? (
                            <Tweets />
                        ) : (
                            <YouShallNotPass />
                        )
                    }
                />
                <Route
                    path="/fraction"
                    element={
                        localStorage.getItem("fraction") === null ? (
                            <FractionQuizMaster />
                        ) : (
                            <YouShallNotPass />
                        )
                    }
                />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </Router>
    );
}

export default App;
