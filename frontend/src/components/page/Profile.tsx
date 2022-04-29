import Navbar from "../Navbar/Navbar";
import React from "react";
import { Box } from "rebass";
import "../../css/App.css";
import jwt from "jwt-decode";
import jwtDecode from "jwt-decode";
import TextField from "@material-ui/core/TextField";
import {SubmitHandler, useForm} from "react-hook-form";
import {showErrorToast, showToast} from "../../helper/show-toast";
import {credentialsApi} from "../../services/api/credentialsApi";

interface jwtToken {
  name: string
}

interface Profile {
  username: string
  email: string
  password: string
}

type UserCredentials = {
  username: string
  email: string
  password: string
}

function Profile() {
  let username:any = {};
  const defaultUserApi = credentialsApi();

  const token = localStorage.getItem("jwt");
  if (typeof token === "string") {
    username = jwtDecode<jwtToken>(token);
  }

  const { register, handleSubmit } = useForm<UserCredentials>();
  const onSubmit: SubmitHandler<UserCredentials> = data => {
    submitHandler(data);
  };

  const submitHandler = async(data: UserCredentials) => {
    const userData = data;
    await defaultUserApi.updateCredentials(userData as Profile)
        .then((response=>{
          showToast("Success");
          localStorage.removeItem("jwt");
          localStorage.setItem("jwt", response.data.jwt);
        }))
        .catch(exception=>{
          showErrorToast("error");
          console.log(exception);
        });
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form">
          <TextField {...register("username")}
                     label="username"
                     style={{ width: "300px", marginBottom: "30px" }}
                     rowsMax={1}
                     className={"middleContent"}
                     placeholder={username.username}
          />
          <br/>
          <TextField {...register("email")}
                     label="email"
                     style={{ width: "300px", marginBottom: "30px" }}
                     rowsMax={1}
                     className={"middleContent"}
                     placeholder={username.email}
          />
          <br/>
          <TextField {...register("password")}
                     label="password"
                     style={{ width: "300px", marginBottom: "30px" }}
                     rowsMax={1}
                     className={"middleContent"}
                     type={"password"}
          />
              <br/>
              <input className={"btn btn-primary App"} type={"submit"} value={"Change Data"}/>
            </div>
          </form>
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
  );
}

export default Profile;