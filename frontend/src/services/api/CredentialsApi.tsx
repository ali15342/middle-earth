import axios, {AxiosResponse} from "axios";
import Profile from "../../components/page/Profile";

const {REACT_APP_BASE_URL} = process.env;
const userBaseApi = `${REACT_APP_BASE_URL}/api/user`;
const headers = {headers: {"Content-Type": "application/json", "mode": "no-cors", "AccessControlAllowOrigin": "*", "Authorization": `Bearer ${localStorage.getItem("jwt")}`}};

export const credentialsApi = () => {
    const updateCredentials = (profile: Profile): Promise<AxiosResponse> => {
        return axios.put(`${userBaseApi}/updateCredentials`, profile, headers);
    };

    return {updateCredentials};
};