interface props {
  info: any;
}

function Character(props:props) {
  return (
    <div>
      <h2>{props.info.name !== "" ? props.info.name : ""}</h2>
      <p>{props.info.birth !== "" ? "Birth: " + props.info.birth : ""}</p>
      <p>{props.info.death !== "" ? "Death: " + props.info.death : ""}</p>
      <p>{props.info.race !== "" ? "Race: " + props.info.race : ""}</p>
      <p>{props.info.hair !== "" ? "Hair: " + props.info.hair : ""}</p>
      <p>{props.info.gender !== "" ? "Gender: " + props.info.gender : ""}</p>
      </div>
  )
}

export default Character