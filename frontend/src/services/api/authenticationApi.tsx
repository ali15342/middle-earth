import axios, {AxiosResponse} from 'axios';
import Login from '../../components/page/Authentication/Login';
import Registration from "../../components/page/Authentication/Registration";

const {REACT_APP_BASE_URL} = process.env;
const userBaseApi = `${REACT_APP_BASE_URL}/api/authentication`
const headers = {headers: {"Content-Type": "application/json", "mode": "no-cors", "AccessControlAllowOrigin": "*"}}

export const authenticationApi = () => {
const authenticate = (user: Login): Promise<AxiosResponse<any>> => {
    return axios.post(`${userBaseApi}/login`, user, headers)
}

const registration = (registration: Registration): Promise<AxiosResponse<any>> => {
    return axios.post(`${userBaseApi}/register`, registration, headers)
}

return {authenticate, registration};
};