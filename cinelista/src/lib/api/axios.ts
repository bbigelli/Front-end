console.log(process.env.NEXT_PUBLIC_TMDB_API_URL)

import axios from "axios";


const tmdbApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_TMDB_API_URL,
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
        "Content-Type": 'application/json'
    }
})

export default tmdbApi;