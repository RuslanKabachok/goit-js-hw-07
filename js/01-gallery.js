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

const onGalleryItemClick = (e) => {
  e.preventDefault();
  const ref = e.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${ref}" width="800" height="600">
`);

  instance.show();
};

galleryEl.addEventListener('click', onGalleryItemClick);
