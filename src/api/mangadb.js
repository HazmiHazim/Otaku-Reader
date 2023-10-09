import axios from "axios";
import {CLIENT_ID, CLIENT_PASSWORD} from "./confidential";

// Endpoints
const API_BASE_URL = "https://api.mangadex.dev";
const NEW_RELEASE = `${API_BASE_URL}/manga?limit=5&order[updatedAt]=desc&includes[]=cover_art`;

export const COVER_IMAGE = (mangaID, fileName) => fileName ? `https://uploads.mangadex.org/covers/${mangaID}/${fileName}` : null;

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

export const fetchNewRelease = () => {
    return apiCall(NEW_RELEASE);
}