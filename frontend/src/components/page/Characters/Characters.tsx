import Navbar from '../../Navbar/Navbar'
import Character from './Character'
import './characters.css'
import React from 'react';
import axios from "axios";
import {api_url} from '../../../services/backendservice'
import CharacterButton from './CharacterButton';

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

  var theOneAPIHeaders = {
    "Content-Type": "application/json",
      mode: "no-cors",
     "Access-Control-Allow-Origin": "*",
     Authorization: `Bearer J3GmG4fs5zMd_T9FocBl`,
           };


  const getCharacter = (character:string) => {
    axios.get(api_url + character, {headers: theOneAPIHeaders})
    .then(response => {
      setCharacter(response.data)
    })
    .catch(error => {
      return(console.log(error))
    })
  }

  return (
    <div>
        <Navbar/>
        <div className="characterContent">
          <h1>Characters</h1>
          <p>Click on one of the icons to get information about a member of the fellowship!</p>
         
          <div>
              <button onClick={() => getCharacter("Gandalf")}>
                <CharacterButton image={"gandalf"}></CharacterButton>
              </button>
            
              <button onClick={() => getCharacter("Frodo Baggins")}>
                <CharacterButton image={"frodo"}></CharacterButton>
              </button>

              <button onClick={() => getCharacter("Legolas")}>
                <CharacterButton image={"legolas"}></CharacterButton>
              </button>

              <button onClick={() => getCharacter("Galadriel")}>
                <CharacterButton image={"galadriel"}></CharacterButton>
              </button>

              <button onClick={() => getCharacter("Gollum")}>
                <CharacterButton image={"gollum"}></CharacterButton>
              </button>

          </div>

        <Character info={character.docs[0]}/>
        
        </div>
        </div>
  )
}

export default Characters