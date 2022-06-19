import React, { useEffect, useState } from "react";
import { Box } from "rebass";
import "../../../css/App.css";
import jwt from "jwt-decode";
import jwtDecode from "jwt-decode";
import TextField from "@material-ui/core/TextField";
import { SubmitHandler, useForm } from "react-hook-form";
import { showErrorToast, showToast } from "../../../helper/show-toast";
import {
    credentialsApi,
    deleteUserAccount
} from "../../../services/api/CredentialsApi";
import QuizMaster from "../quiz/QuizMaster";
import "./Profile.css";
import { Checkbox } from "@material-ui/core";
import { authenticationApi } from "../../../services/api/AuthenticationApi";
import { useNavigate } from "react-router-dom";

interface jwtToken {
    name: string;
}

interface Profile {
    username: string;
    email: string;
    password: string;
}

type UserCredentials = {
    username: string;
    email: string;
    password: string;
};

function Profile() {
    let username: any = {};
    const defaultUserApi = credentialsApi();
    const defaultDeleteUserApi = deleteUserAccount();
    const [isMounted, setIsMounted] = useState(false);
    const navigate = useNavigate();

    const token = localStorage.getItem("jwt");
    if (typeof token === "string") {
        username = jwtDecode<jwtToken>(token);
    }

    const { register, handleSubmit } = useForm<UserCredentials>();
    const onSubmit: SubmitHandler<UserCredentials> = (data) => {
        submitHandler(data);
    };

    const submitHandler = async (data: UserCredentials) => {
        const userData = data;
        await defaultUserApi
            .updateCredentials(userData as Profile)
            .then((response) => {
                showToast("Success");
                localStorage.removeItem("jwt");
                localStorage.setItem("jwt", response.data.jwt);
                window.location.reload();
            })
            .catch((exception) => {
                showErrorToast("error");
                console.log(exception);
            });
    };

    async function deleteAccount() {
        await defaultDeleteUserApi.deleteUserAccount();
        await authenticationApi()
            .logout()
            .then(() => {
                localStorage.removeItem("jwt");
                navigate("/");
            })
            .catch((exception) => console.log(exception));
    }

    function openProfileSettings() {
        document.getElementById("sidenav")!.style.width = "250px";
    }

    function closeProfileSettings() {
        document.getElementById("sidenav")!.style.width = "0px";
    }

    const inputXml = () => {
        localStorage.setItem("contentNegotiation", "xml");
    };

    const inputJson = () => {
        localStorage.setItem("contentNegotiation", "json");
    };

    const role = username.role.toLocaleLowerCase();

    const aboutUrl = "/about";

    return (
        <div>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh"
                }}
            >
                <Box
                    sx={{
                        p: 0
                    }}
                />
                <Box
                    sx={{
                        flex: "1 1 auto",
                        p: 0
                    }}
                >
                    <div className="App">
                        <input
                            className={"btn btn-primary App"}
                            type={"button"}
                            value={"Profile Settings"}
                            onClick={() => {
                                openProfileSettings();
                            }}
                        />
                        <h2 className="">{username.username}</h2>
                        {role !== "default" ? (
                            <>
                                {" "}
                                <h3 className={""}>Race {role}</h3>
                                <img
                                    src={"../fractions/" + role + ".jpg"}
                                    style={{
                                        width: "80%",
                                        maxWidth: "550px",
                                        margin: "inherit",
                                        position: "relative"
                                    }}
                                />
                                <br />
                                <label>
                                    Find out more about your race&nbsp;
                                </label>
                                <u>
                                    <a
                                        style={{
                                            color: "black",
                                            fontSize: "16px",
                                            fontStyle: "bold",
                                            textDecoration: "underline"
                                        }}
                                        href={aboutUrl + "/" + role}
                                    >
                                        here
                                    </a>
                                </u>
                            </>
                        ) : (
                            <></>
                        )}
                        <div id={"sidenav"} className={"sidenav"}>
                            <p className="">Change your profile details</p>
                            <a
                                href="javascript:void(0)"
                                className="closebtn"
                                onClick={closeProfileSettings}
                            >
                                &times;
                            </a>
                            <div style={{ marginBottom: "20px" }} />
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form">
                                    <TextField
                                        {...register("username")}
                                        label="username"
                                        style={{
                                            width: "300px",
                                            marginBottom: "30px"
                                        }}
                                        maxRows={1}
                                        className={"middleContent"}
                                        placeholder={username.username}
                                    />
                                    <br />
                                    <TextField
                                        {...register("email")}
                                        label="email"
                                        style={{
                                            width: "300px",
                                            marginBottom: "30px"
                                        }}
                                        maxRows={1}
                                        className={"middleContent"}
                                        placeholder={username.email}
                                    />
                                    <br />
                                    <TextField
                                        {...register("password")}
                                        label="password"
                                        style={{
                                            width: "300px",
                                            marginBottom: "30px"
                                        }}
                                        maxRows={1}
                                        className={"middleContent"}
                                        type={"password"}
                                    />
                                    <br />
                                    <input
                                        className={"btn btn-primary App"}
                                        type={"submit"}
                                        value={"Change Data"}
                                    />
                                </div>
                            </form>
                            <hr />
                            <p> Receive data as</p>
                            <label>
                                <Checkbox
                                    id={"json"}
                                    onClick={() => inputJson()}
                                    value={"application/json"}
                                    name={"contentNegotiation"}
                                />
                                JSON
                            </label>
                            <label>
                                <Checkbox
                                    id={"xml"}
                                    onClick={() => inputXml()}
                                    value={"application/xml"}
                                    name={"contentNegotiation"}
                                />
                                XML
                            </label>
                            <hr />
                            <input
                                className={"btn btn-primary App"}
                                type={"button"}
                                value={"Delete Account"}
                                onClick={() => {
                                    deleteAccount();
                                }}
                            />
                        </div>
                        <hr />
                        <h3>Test your nerd level</h3>
                        {!isMounted ? (
                            <input
                                className={"btn btn-primary App"}
                                type={"button"}
                                value={"Take Quiz"}
                                onClick={() => setIsMounted(true)}
                            />
                        ) : null}
                        {isMounted && <QuizMaster />}
                    </div>
                </Box>
                <Box
                    sx={{
                        p: 0
                    }}
                />
            </Box>
            <>
                <br />
            </>
        </div>
    );
}

export default Profile;
