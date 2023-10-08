import axios from "axios";
import {CLIENT_ID, CLIENT_PASSWORD} from "./confidential";

// Endpoints
const API_BASE_URL = "https://api.mangadex.dev/";
const POPULAR_MANGA = `${API_BASE_URL}/manga`;

const apiCall = async (endpoint, params) => {
    const options = {
        method: 'GET',
        url: endpoint,
        params: params ? params: {}
    }

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log("Error", error);
        return {}
    }
}
 
export const fetchPopularManga = () => {
    return apiCall(POPULAR_MANGA);
}