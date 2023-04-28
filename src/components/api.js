import axios from 'axios';

const END_POINT = 'https://pixabay.com/api/';
const API_KEY = '33368489-8726f5d8adad5faef124f4e3c';
const SEARCH_PARAMETER = 'image_type=photo&orientation=horizontal';
const PER_PAGE = 12;

export function getResponse(query, multiplierForPage = 1) {
  return axios(
    `${END_POINT}?q=${query}&page=${
      1 * multiplierForPage
    }&key=${API_KEY}&${SEARCH_PARAMETER}&per_page=${PER_PAGE}`
  );
}
