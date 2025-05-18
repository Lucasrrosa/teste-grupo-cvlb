import axios from "axios";

const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL as string,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
})

export const api = apiInstance;