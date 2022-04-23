import Navbar from '../../Navbar/Navbar'
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import '../../../css/App.css'
import { userApi } from '../../../services/api/userApi';
import { showToast, showErrorToast } from '../../../helper/show-toast';
import {SubmitHandler, useForm} from "react-hook-form"
import {ToastContainer} from "react-toastify";

interface Login {
  username: string
  password: string
}

type LoginType = {
  username: string
  password: string
}

function Login() {
  const defaultUserApi = userApi()
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<LoginType>();
  const onSubmit: SubmitHandler<LoginType> = data => {
    submitHandler(data);
  }

  const submitHandler = async(data:LoginType) => {
    const loginData = data

    await defaultUserApi.authenticate(loginData as Login)
    .then((response=>{
      showToast("Success");
      localStorage.setItem("jwt", response.data.jwt)
      navigate('../map')
    }))
    .catch(exception=>{
      showErrorToast("error")
      console.log(exception)
    })
  }

  return (
    <div><Navbar/>
   <div className="App">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h1 className="boldText">Login</h1>
              <TextField {...register("username", { required: true })}
                label="username"
                style={{ width: "300px", marginBottom: "30px" }}
                rowsMax={1}
                className={"middleContent"}
              />
              <br/>
              <TextField {...register("password", { required: true })}
                label="password"
                type="password"
                style={{ width: "300px", marginBottom: "15px" }}
                rowsMax={1}
                className={"middleContent"}
              />
              <br/>
              <br/>
              <input className={"btn btn-primary App"} type={"submit"} value={"Login"}/>
            </div>
          </form>
          <br />
          <p>or</p>
          <br />
          <div>
            <Link to="../register" className="btn btn-primary App">
              Register
            </Link>
          </div>
          <br/>
          <div style={{ marginBottom: "20px" }}>
          </div>
        </div>
      <ToastContainer/>
    </div>
  )
}

export default Login