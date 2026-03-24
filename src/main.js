import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.btn-load-more');

let query = '';
let page = 1;
let totalHits = 0;
let perPage = 15;

form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);


// 🔍 Пошук
async function onSearch(event) {
  event.preventDefault();

  query = event.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query',
      position: 'topRight',
    });
    return;
  }

  page = 1;
  clearGallery();
  loadMoreBtn.classList.add('is-hidden');

  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query.',
        position: 'topRight',
      });
      return;
    }

    totalHits = data.totalHits;

    createGallery(data.hits);

    // ✅ показуємо кнопку якщо є ще
    if (totalHits > perPage) {
      loadMoreBtn.classList.remove('is-hidden');
    }

  } catch (error) {
    iziToast.error({
      message: 'Cannot fetch images. Try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }

  form.reset();
}


// ➕ Load more
async function onLoadMore() {
  page += 1;

  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    createGallery(data.hits);

    // 🔢 скільки вже завантажено
    const loadedImages = page * perPage;

    // ❌ якщо більше нема
    if (loadedImages >= totalHits) {
      loadMoreBtn.classList.add('is-hidden');

      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }

  } catch (error) {
    iziToast.error({
      message: 'Error loading more images.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}
