import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMore,
  hideLoadMore,
  disableLoadMoreBtn,
  enableLoadMoreBtn,
  showToast,
} from './js/render-functions.js';

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
  if (!query) return showToast('Please enter a search query', 'warning');

  page = 1;
  clearGallery();
  hideLoadMore();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    if (data.hits.length === 0) {
      return showToast(
        'Sorry, there are no images matching your search query.',
        'error'
      );
    }

    totalHits = data.totalHits;
    createGallery(data.hits);
    scrollToTop();

    if (totalHits > perPage) showLoadMore();
  } catch {
    showToast('Cannot fetch images. Try again later.', 'error');
  } finally {
    hideLoader();
    form.reset();
  }
}

// ➕ Load More
// 🔍 Пошук
async function onSearch(event) {
  event.preventDefault();

  query = event.target.elements['search-text'].value.trim();
  if (!query) return showToast('Please enter a search query', 'warning');

  page = 1;
  clearGallery();
  hideLoadMore();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    if (data.hits.length === 0) {
      return showToast(
        'Sorry, there are no images matching your search query.',
        'error'
      );
    }

    totalHits = data.totalHits;
    createGallery(data.hits);
    scrollToTop();

    if (totalHits > perPage) {
      showLoadMore(); // більше сторінок є
    } else {
      // Якщо всі результати помістилися на одну сторінку
      showToast("You've reached the end of search results.", 'info');
    }
  } catch {
    showToast('Cannot fetch images. Try again later.', 'error');
  } finally {
    hideLoader();
    form.reset();
  }
}

// ➕ Load More
async function onLoadMore() {
  page += 1;
  disableLoadMoreBtn();
  hideLoadMore(); // приховуємо під час завантаження
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    createGallery(data.hits);
    scrollToTop();

    const loadedImages = page * perPage;

    if (loadedImages < totalHits) {
      // Є ще зображення
      showLoadMore();
    } else {
      // Дійшли до кінця результатів
      hideLoadMore();
      showToast("You've reached the end of search results.", 'info');
    }
  } catch {
    showToast('Error loading more images.', 'error');
  } finally {
    enableLoadMoreBtn();
    hideLoader();
  }
}

// 📜 Плавний скрол до нових зображень
function scrollToTop() {
  const galleryItem = document.querySelector('.gallery').firstElementChild;
  if (galleryItem) {
    const { height } = galleryItem.getBoundingClientRect();
    window.scrollBy({ top: height * 2, behavior: 'smooth' });
  }
}
