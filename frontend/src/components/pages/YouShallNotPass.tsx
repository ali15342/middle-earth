import React from "react";
import Navbar from "../navbar/Navbar";

function YouShallNotPass(){
    return(
        <div className={"App"}>
            <Navbar/>
            <div style={{display: "flex",  justifyContent:"center", alignItems:"center"}}>
                <iframe allow="fullscreen" frameBorder="0" height="270" src="https://giphy.com/embed/BZMggpshzrPvbfQHIF/video" width="480"/>
            </div>
        </div>
    );
}
export default YouShallNotPass;