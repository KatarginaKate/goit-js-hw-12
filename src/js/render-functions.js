import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.btn-load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// =========================
// ГАЛЕРЕЯ
// =========================
export function createGallery(images) {
  const markup = images
    .map(
      image => `
<li class="gallery-item">
  <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      alt="${image.tags}"
    />
  </a>
  <div class="info">
    <p class="info-item"><b>Likes</b> ${image.likes}</p>
    <p class="info-item"><b>Views</b> ${image.views}</p>
    <p class="info-item"><b>Comments</b> ${image.comments}</p>
    <p class="info-item"><b>Downloads</b> ${image.downloads}</p>
  </div>
</li>
`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

// =========================
// ЛОАДЕР
// =========================
export function showLoader() {
  if (loader) loader.classList.remove('is-hidden');
}

export function hideLoader() {
  if (loader) loader.classList.add('is-hidden');
}

// =========================
// КНОПКА LOAD MORE
// =========================
export function showLoadMore() {
  if (loadMoreBtn) {
    loadMoreBtn.classList.remove('is-hidden');
    loadMoreBtn.disabled = false;
  }
}

export function hideLoadMore() {
  if (loadMoreBtn) {
    loadMoreBtn.classList.add('is-hidden');
    loadMoreBtn.disabled = true;
  }
}

export function disableLoadMoreBtn() {
  if (loadMoreBtn) loadMoreBtn.disabled = true;
}

export function enableLoadMoreBtn() {
  if (loadMoreBtn) loadMoreBtn.disabled = false;
}

// =========================
// TOAST
// =========================
export function showToast(message, type = 'info') {
  iziToast[type]({
    message,
    position: 'topRight',
  });
}
