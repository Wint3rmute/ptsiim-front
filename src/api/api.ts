import axios from 'axios';

// https://ptsiim-api.herokuapp.com/swagger-ui.html#/ use this to get help
const API_BASE_URL = 'https://ptsiim-api.herokuapp.com/api';

export default class API {
    static signUp(email: string, firstname: string, lastname: string, password: string, role: string, username: string) {
        return axios.post(
            `${API_BASE_URL}/auth/signup`,
            {
                email,
                firstname,
                lastname,
                password,
                // Bo może być więcej ról ~ Mateusz Śliwka 2020
                role: [role.toLowerCase()],
                username,
            }
        );
    }
    static signIn(username: string, password: string) {
        return axios.post(
            `${API_BASE_URL}/auth/signin`,
            {
                username,
                password
            }
        );
    }
}