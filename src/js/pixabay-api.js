import axios from 'axios';

export function getImagesByQuery(query) {
  const API_KEY = '55027621-850b52e35e959b3f4fd98aefc';
  const BASE_URL = 'https://pixabay.com/api/';

  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

  return axios
    .get(url)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
}
