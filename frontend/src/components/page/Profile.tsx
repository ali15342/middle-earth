import Navbar from '../Navbar/Navbar'
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Box } from "rebass";
import TextField from "@material-ui/core/TextField";
import '../../css/App.css'
import {showErrorToast, showToast} from "../../helper/show-toast";
import {userApi} from "../../services/api/userApi";
import {SubmitHandler, useForm} from "react-hook-form";
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
          <p>{username.username}</p>
          

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