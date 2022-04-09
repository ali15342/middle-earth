import axios, {AxiosResponse} from 'axios';
import Login from '../../components/page/Authentication/Login';
import Registration from "../../components/page/Authentication/Registration";

const {REACT_APP_BASE_URL} = process.env;

export const userApi = () => {
const authenticate = (user: Login): Promise<AxiosResponse<any>> => {
    return axios.post(`${REACT_APP_BASE_URL}/api/authentication/login`, user, {headers: {"Content-Type": "application/json", "mode": "no-cors", "AccessControlAllowOrigin": "*"}})
}

const registration = (user: Registration): Promise<AxiosResponse<any>> => {
    return axios.post(`${REACT_APP_BASE_URL}/api/authentication/register`, user, {headers: {"Content-Type": "application/json", "mode": "no-cors", "AccessControlAllowOrigin": "*"}})
}

return {authenticate, registration};
};