import Navbar from "../../navbar/Navbar";
import React from "react";
import "./about.css";

function About() {
  return (
    <div>
      <Navbar/>
      <div>
         <h1>About</h1>
         <p className="text-center">Explore the world of middle earth with our map. What we offer:</p>
         <div className="text-center columnUL">
           <li>Middle Earth Map</li>
           <li>Quiz</li>
           <li>Trivia</li>
         </div>
      </div>
      
    </div>
  );
}

export default About;