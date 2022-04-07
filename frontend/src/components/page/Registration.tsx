import Navbar from '../Navbar/Navbar'
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box } from "rebass";
import TextField from "@material-ui/core/TextField";
import '../../css/App.css'

function Registration() {

  const [formValue, setformValue] = React.useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  
  const submitHandler = async() => {
    const loginFormData = new FormData();
    loginFormData.append("username", formValue.username);
    loginFormData.append("email", formValue.email);
    loginFormData.append("password", formValue.password);
    let backendUrl = "http://localhost:8080/api/authentication/register";

    let object:any = {};
    loginFormData.forEach(function(value:any, key:any){
      object[key] = value;
    });
    var loginJsonData = JSON.stringify(object);
    
    try {
      const response = await axios({
        method: "post",
        url: backendUrl, 
        data: loginJsonData,
        headers: { "Content-Type": "application/json",
        mode: "no-cors",
        AccessControlAllowOrigin: "*"},
      });
      navigate('../login')
    } catch(error) {
      console.log(error)
    }
  }

  const handleChange = (event:any) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }

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
          <form onSubmit={submitHandler}>
            <div className="form">
              <h1 className="boldText">Create an account</h1>
              <TextField
                name="username"
                label="username"
                style={{ width: "300px", marginBottom: "30px" }}
                rowsMax={1}
                value={formValue.username}
                onChange={handleChange}
                className={"middleContent"}
                required
              />
              <br/>
              <TextField
                name="email"
                label="email"
                type="email"
                style={{ width: "300px", marginBottom: "30px" }}
                rowsMax={1}
                value={formValue.email}
                onChange={handleChange}
                className={"middleContent"}
                required
              />
              <br/>
              <TextField
                name="password"
                label="password"
                type="password"
                style={{ width: "300px", marginBottom: "15px" }}
                rowsMax={1}
                value={formValue.password}
                onChange={handleChange}
                className={"middleContent"}
                required
              />

              <br></br>
              <br></br>
              <Link
                to="#"
                className="btn btn-primary middleContent App"
                style={{ width: "300px" }}
                onClick={submitHandler}
              >
                Register
              </Link>
            </div>
          </form>
          <br />
          <p>or</p>
          <br />
          <div>
            <Link to="../login" className="btn btn-primary App">
              Login
            </Link>
          </div>
          <br></br>
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

export default Registration