import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const markUp = galleryItems
  .map((item) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
  })
  .join('');

galleryEl.insertAdjacentHTML('afterbegin', markUp);

const imgEl = document.querySelector('.gallery__link');

const zoomImg = (e) => {
  e.preventDefault();
};

galleryEl.addEventListener('click', zoomImg);
