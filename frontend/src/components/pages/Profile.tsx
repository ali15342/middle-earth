import Navbar from "../navbar/Navbar";
import React, {useState} from "react";
import { Box } from "rebass";
import "../../css/App.css";
import jwt from "jwt-decode";
import jwtDecode from "jwt-decode";
import TextField from "@material-ui/core/TextField";
import {set, SubmitHandler, useForm} from "react-hook-form";
import {showErrorToast, showToast} from "../../helper/show-toast";
import {credentialsApi} from "../../services/api/CredentialsApi";
import QuizMaster from "./quiz/QuizMaster";

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
  const [isMounted, setIsMounted] = useState(false);

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
          <p>Welcome {username.username}</p>
          <div style={{ marginBottom: "20px" }}>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form">
          <TextField {...register("username")}
                     label="username"
                     style={{ width: "300px", marginBottom: "30px" }}
                     maxRows={1}
                     className={"middleContent"}
                     placeholder={username.username}
          />
          <br/>
          <TextField {...register("email")}
                     label="email"
                     style={{ width: "300px", marginBottom: "30px" }}
                     maxRows={1}
                     className={"middleContent"}
                     placeholder={username.email}
          />
          <br/>
          <TextField {...register("password")}
                     label="password"
                     style={{ width: "300px", marginBottom: "30px" }}
                     maxRows={1}
                     className={"middleContent"}
                     type={"password"}
          />
              <br/>
              <input className={"btn btn-primary App"} type={"submit"} value={"Change Data"}/>
            </div>
          </form>
          <hr/>
          <h2>Test your nerd level</h2>
          {!isMounted ? <input className ={"btn btn-primary App"} type={"button"} value={"Take Quiz"} onClick={()=>setIsMounted(true)}/> : null}
          {
           isMounted && <QuizMaster/>
          }
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