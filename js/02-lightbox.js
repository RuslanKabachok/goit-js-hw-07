import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: '',
  nav: true,
  close: true,
  showCounter: true,
  fadeSpeed: 250,
});

const refs = {
  galleryEl: document.querySelector('.gallery'),
};

const markUp = galleryItems
  .map((item) => {
    return `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`;
  })
  .join('');

refs.galleryEl.insertAdjacentHTML('afterbegin', markUp);

const closeInstance = (e) => {
  window.removeEventListener('keydown', closeInstance);
};

const onGalleryItemClick = (e) => {
  e.preventDefault();
  gallery.on('show.simplelightbox', function () {});
  window.addEventListener('keydown', closeInstance);
};

refs.galleryEl.addEventListener('click', onGalleryItemClick);
