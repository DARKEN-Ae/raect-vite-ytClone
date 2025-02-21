import axios from "axios";

const API_KEY = "4798f340b4mshacd1670718a6f66p193a3fjsnbe4622b10b1d";
const BASE_URL = "https://youtube138.p.rapidapi.com";

export const fetchVideos = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: { query, type: "video" },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    });

    return response.data?.contents ?? [];
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};

export const fetchVideoDetails = async (videoId) => {
  try {
    const response = await axios.get(`${BASE_URL}/video/details/`, {
      params: { id: videoId },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    });

    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};
