import React from 'react'

interface props {
  name: String;
}

function Character(props:props) {
  return (
    <div>
      <h1>Name:</h1>
      Hello my name is {props.name}
      </div>
  )
}

export default Character