import React, { useState } from "react";
import { Box } from "rebass";
import "../../css/App.css";
import jwt from "jwt-decode";
import jwtDecode from "jwt-decode";
import TextField from "@material-ui/core/TextField";
import { SubmitHandler, useForm } from "react-hook-form";
import { showErrorToast, showToast } from "../../helper/show-toast";
import { credentialsApi, deleteAccount } from "../../services/api/CredentialsApi";
import QuizMaster from "./quiz/QuizMaster";

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
    const defaultDeleteUserApi = deleteAccount();
    const [isMounted, setIsMounted] = useState(false);

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

    async function deleteAccout(jwt: string) {
        await defaultDeleteUserApi.deleteAccount(jwt);
    }

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
                        <h2 className="">{username.username}</h2>
                        <h3 className={""}>Race {role}</h3>
                        <img
                            src={"../fractions/" + role + ".jpg"}
                            style={{
                                width: "20vw",
                                height: "20vh",
                                margin: "inherit",
                                position: "relative"
                            }}
                        />
                        <br />
                        <label>
                            Find out more about your race&nbsp;
                        </label>
                        <u>
                        <a style={{color: "black", fontSize: "16px", fontStyle:"bold", textDecoration:"underline"}} href={aboutUrl + "/" + role}>
                            here
                        </a>
                        </u>
                        <hr />
                        <h1 className="">Change your profile details</h1>
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
                            <input
                                    className={"btn btn-primary App"}
                                    type={"button"}
                                    value={"Delete Account"}
                                    onClick = {() => deleteAccout(localStorage.getItem("jwt")!)}
                                />
                        <hr />
                        <h2>Test your nerd level</h2>
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
