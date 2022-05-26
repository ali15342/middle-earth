import {twitterApi} from "../../services/api/TwitterApi";
import {showErrorToast, showToast} from "../../helper/show-toast";
import Navbar from "../navbar/Navbar";
import React, {useEffect, useState} from "react";

function Tweets() {
    const defaultTwitterApi = twitterApi();

    useEffect(()=>{
        getTweets();
    });

const [twitterResponseText, setTwitterResponseText] = useState<string>("");
const [twitterResponseCreatedAt, setTwitterResponseCreatedAt] = useState<string>("");

const getTweets = async () => {
    await defaultTwitterApi.tweets()
        .then(response => {
            setTwitterResponseText(response.data.response.data[0].text);
            setTwitterResponseCreatedAt(response.data.response.data[0].createdAt);
        })
        .catch(exception => {
            showErrorToast("error");
            console.log(exception);
        });
};

return (
    <div>
        <Navbar/>
        <div className="App">
            <h1>Tweets</h1>
            <p>{twitterResponseText}</p>
            <p>{twitterResponseCreatedAt}</p>
        </div>
    </div>
    );
}
export default Tweets;
