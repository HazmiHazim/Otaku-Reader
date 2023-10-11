import axios from "axios";

// Endpoints
const API_BASE_URL = "https://api.mangadex.dev";
const NEW_RELEASE = `${API_BASE_URL}/manga?limit=5&order[latestUploadedChapter]=desc&includes[]=manga&includes[]=cover_art&contentRating[]=safe`;
const POPULAR_MANGA = `${API_BASE_URL}/manga?limit=10&order[rating]=desc&includes[]=manga&includes[]=cover_art&contentRating[]=safe`;
const NEW_MANGA = `${API_BASE_URL}/manga?limit=10&order[createdAt]=desc&includes[]=manga&includes[]=cover_art&contentRating[]=safe`;

export const COVER_IMAGE = (mangaID, fileName) => fileName ? `https://uploads.mangadex.org/covers/${mangaID}/${fileName}` : null;

const apiCall = async (endpoint, params) => {
    const options = {
        method: 'GET',
        url: endpoint,
        params: params ? params : {}
    }

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log("Error", error);
        return {}
    }
};

export const fetchNewRelease = () => {
    return apiCall(NEW_RELEASE);
};

export const fetchPopularManga = () => {
    return apiCall(POPULAR_MANGA);
};

export const fetchNewManga = () => {
    return apiCall(NEW_MANGA);
};