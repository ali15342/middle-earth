import React from "react";

interface props {
    image: string;
}

function CharacterButton(props: props) {
    /* eslint-disable */
    const image: string = require("../../../img/characters/" +
        props.image +
        ".svg");

    return (
        <img
            src={image}
            className="icon"
            style={{ width: "100px" }}
            alt={"The character " + props.image}
        />
    );
}

export default CharacterButton;
