interface props {
  info: any;
}

function Character(props:props) {
  return (
    <div>

      <p>{props.info.name != "" ? "Name: " + props.info.name : ""}</p>
      <p>{props.info.birth != "" ? "Birth: " + props.info.birth : ""}</p>
      <p>{props.info.death != "" ? "Death: " + props.info.death : ""}</p>
      <p>{props.info.race != "" ? "Race: " + props.info.race : ""}</p>
      <p>{props.info.hair != "" ? "Hair:" + props.info.hair : ""}</p>
      <p>{props.info.gender != "" ? "Gender: " + props.info.gender : ""}</p>
      </div>
  )
}

export default Character