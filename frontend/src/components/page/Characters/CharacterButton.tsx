import React from 'react'
interface props {
    image: String;
  }

function CharacterButton(props:props) {

    const image :string = require('../../../img/characters/' + props.image + '.svg');

  return (
    <img src={image} className="icon" style={{"width":"100px"}}></img>
  )
}

export default CharacterButton