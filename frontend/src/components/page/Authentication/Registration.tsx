import Navbar from "../../Navbar/Navbar";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "rebass";
import TextField from "@material-ui/core/TextField";
import "../../../css/App.css";
import {showErrorToast, showToast} from "../../../helper/show-toast";
import {authenticationApi} from "../../../services/api/authenticationApi";
import {SubmitHandler, useForm} from "react-hook-form";

interface Registration{
  username: string,
  email: string,
  password: string
}

type RegistrationType = {
  username: string
  email: string
  password: string
}

function Registration() {
  const defaultUserApi = authenticationApi();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<RegistrationType>();
  const onSubmit: SubmitHandler<RegistrationType> = data => {
    submitHandler(data);
  };

  const submitHandler = async(data:RegistrationType) => {
    const registrationData = data;

    await defaultUserApi.registration(registrationData as Registration)
        .then((response=>{
          showToast("Success");
          navigate("../login");
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form">
              <h1 className="boldText">Create an account</h1>
              <TextField {...register("username", { required: true })}
                label="username"
                style={{ width: "300px", marginBottom: "30px" }}
                rowsMax={1}
                className={"middleContent"}
                required
              />
              <br/>
              <TextField {...register("email", { required: true })}
                label="email"
                type="email"
                style={{ width: "300px", marginBottom: "30px" }}
                rowsMax={1}
                className={"middleContent"}
                required
              />
              <br/>
              <TextField {...register("password", { required: true })}
                label="password"
                type="password"
                style={{ width: "300px", marginBottom: "15px" }}
                rowsMax={1}
                className={"middleContent"}
                required
              />
              <br/>
              <br/>
              <input className={"btn btn-primary App"} type={"submit"} value={"Register"}/>
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
          <br/>
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
  );
}

export default Registration;