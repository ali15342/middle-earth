import Navbar from "../../Navbar/Navbar";
import Character from "./Character";
import "./characters.css";
import React from "react";
import axios from "axios";
import {api_url} from "../../../services/BackendService";
import CharacterButton from "./CharacterButton";

function Characters() {

  const [character, setCharacter] = React.useState({
    "docs": [
      {
          "_id": "",
          "height": "",
          "race": "",
          "gender": "",
          "birth": "",
          "spouse": "",
          "death": "",
          "realm": "",
          "hair": "",
          "name": "",
          "wikiUrl": ""
      }
  ],
  "total": 1,
  "limit": 1,
  "offset": 0,
  "page": 1,
  "pages": 1
  });

  const theOneAPIHeaders = {
    "Content-Type": "application/json",
      mode: "no-cors",
     "Access-Control-Allow-Origin": "*",
     Authorization: "Bearer J3GmG4fs5zMd_T9FocBl",
           };


  const getCharacter = (character:string) => {
    axios.get(api_url + character, {headers: theOneAPIHeaders})
    .then(response => {
      setCharacter(response.data);
    })
    .catch(error => {
      return(console.log(error));
    });
  };

  return (
    <div>
        <Navbar/>
        <div className="characterContent">
          <div>
          <h1>Characters</h1>
          <p>Click on one of the icons to get information about a member of the fellowship!</p>
         
          <div>
              <button onClick={() => getCharacter("Gandalf")}>
                <CharacterButton image={"gandalf"}/>
              </button>
            
              <button onClick={() => getCharacter("Frodo Baggins")}>
                <CharacterButton image={"frodo"}/>
              </button>

              <button onClick={() => getCharacter("Legolas")}>
                <CharacterButton image={"legolas"}/>
              </button>

              <button onClick={() => getCharacter("Galadriel")}>
                <CharacterButton image={"galadriel"}/>
              </button>

              <button onClick={() => getCharacter("Gollum")}>
                <CharacterButton image={"gollum"}/>
              </button>
          </div>

          </div>
          
        <Character info={character.docs[0]}/>
        
        </div>
        </div>
  );
}

export default Characters;