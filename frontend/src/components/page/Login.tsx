import Navbar from '../Navbar/Navbar'
import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box } from "rebass";
import TextField from "@material-ui/core/TextField";

function Login() {

  const [inputFields, setInputFields] = useState([
    { username:String = "", password:String = "" },
  ]);

  const currentState: Object = useRef();
  currentState.current: String[] = inputFields;

  const headers = {
    "Content-Type": "application/json",
    mode: "no-cors",
  };
  const navigate = useNavigate();

  const submit = () => {
    axios
      .post(
        "http://localhost:8080/api/authentication/login",
        currentState.current[0],
        {
          headers: headers,
        }
      )
      .then((response) => {
        localStorage.setItem("jwt", response.data.jwt);
        console.log("success");
        navigate("../LearningPath");
      })
      .catch((error) => {
        console.log(error);
      
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
      ></Box>
      <Box
        sx={{
          flex: "1 1 auto",
          p: 0,
        }}
      >
        <div className="App">
          <form onSubmit={submit}>
            <div className="form">
              <h1 className="boldText">Login</h1>
              <TextField
                name="username"
                label="username"
                style={{ width: "300px", marginBottom: "30px" }}
                rowsMax={1}

                className={"middleContent"}
              />

              <TextField
                name="password"
                label="password"
                type="password"
                style={{ width: "300px", marginBottom: "15px" }}
                rowsMax={1}
                className={"middleContent"}
              />

              <br></br>
              <br></br>
              <Link
                to="../LearningPath"
                className="btn btn-primary middleContent"
                style={{ width: "300px" }}
                onClick={submit}
              >
                Login
              </Link>
            </div>
          </form>
          <br />
          <p>or</p>
          <br />
          <div>
            <Link to="../Register" className="btn btn-primary">
              Register
            </Link>
          </div>
          <br></br>
          <div style={{ marginBottom: "20px" }}>
            <Link to="../ForgotPassword" className="btn btn-outline-primary">
              Forgot Password ?
            </Link>
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

export default Login