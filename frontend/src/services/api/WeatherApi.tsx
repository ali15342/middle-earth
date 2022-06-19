import axios, { AxiosResponse } from "axios";

const headers = {
    headers: {
        mode: "no-cors",
        AccessControlAllowOrigin: "*",
        "X-RapidAPI-Key": "32c679c19cmsh0b82a15b9e886b0p17087fjsn036a4145e8b8",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
    }
};

export const weatherApi = () => {
    const weatherShire = (): Promise<AxiosResponse> => {
        return axios.get("https://weatherapi-com.p.rapidapi.com/current.json?q=Sydney", headers);
    };
    const weatherMordor = (): Promise<AxiosResponse> => {
        return axios.get("https://weatherapi-com.p.rapidapi.com/current.json?q=Baghdad", headers);
    };
    return { weatherShire, weatherMordor };
};
