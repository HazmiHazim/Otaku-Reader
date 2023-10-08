import axios from "axios";
import { USERNAME, PASSWORD, CLIENT_ID, CLIENT_PASSWORD } from '../api/confidential';

// Initialize Refresh Token
let newToken = null;

const authenticate = async () => {
    const form = {
        method: 'POST',
        url: 'https://auth.mangadex.org/realms/mangadex/protocol/openid-connect/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {
            grant_type: 'password',
            username: USERNAME,
            password: PASSWORD,
            client_id: CLIENT_ID,
            client_secret: CLIENT_PASSWORD,
        }
    }

    try {
        const response = await axios(form);
        const { access_token, refresh_token } = response.data;
        console.log("Access Token: ", access_token);
        console.log("Refresh Token: ", refresh_token);
        newToken = refresh_token;
        return response.data;
    } catch (error) {
        console.log("Form: ", form);
        console.log("Error: ", error);
        return {};
    }
};

const refreshToken = async () => {
    if (!newToken) {
        return {};
    }

    const form = {
        method: 'POST',
        url: 'https://auth.mangadex.org/realms/mangadex/protocol/openid-connect/token/auth/refresh',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {
            grant_type: 'refresh_token',
            refresh_token: newToken,
            client_id: CLIENT_ID,
            client_secret: CLIENT_PASSWORD,
        }
    }

    try {
        const response = await axios(form);
        return response.data;
    } catch (error) {
        console.log("Error: ", error);
        return {}
    }
};


export const getAuthentication = async () => {
    return await authenticate();
};

export const getRefreshToken = async () => {
    return await refreshToken();
};