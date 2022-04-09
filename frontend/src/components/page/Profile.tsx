import Navbar from '../Navbar/Navbar'
import React from 'react'
import { Box } from "rebass";
import '../../css/App.css'
import jwt from 'jwt-decode'
import jwtDecode from 'jwt-decode';

interface jwtToken {
  name: string
}

function Profile() {
  let username:any = {};
  const token = localStorage.getItem("jwt");
  if (typeof token === 'string') {
    username = jwtDecode<jwtToken>(token);
  }
  console.log(username.username);
  

  return (
    <div><Navbar/>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box
    sx={{
      p: 0,
    }}
    />
      <Box
        sx={{
          flex: "1 1 auto",
          p: 0,
        }}
      >
        <div className="App">
          <h2 className="">Middle Earth</h2>
          <h1 className="">Nerd Society</h1>
          <hr />
          <p>Willkommen {username.username}</p>
          

          <div style={{ marginBottom: "20px" }}>
          </div>
        </div>
      </Box>
      <Box
        sx={{
          p: 0,
        }}
      >
      </Box>
    </Box>
    </div>
  )
}

export default Profile