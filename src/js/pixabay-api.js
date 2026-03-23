import axios from 'axios';

const API_KEY = '55027621-850b52e35e959b3f4fd98aefc';
const BASE_URL = 'https://pixabay.com/api/';

let currentPage = 1;
let lastQuery = '';

export async function getImagesByQuery(query) {
  if (query !== lastQuery) {
    lastQuery = query;
    currentPage = 1;
  }

  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: 15,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    currentPage += 1;

    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}

