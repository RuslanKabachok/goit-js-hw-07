import { galleryItems } from './gallery-items.js';
// Change code below this line

const instance = basicLightbox.create(`
    <img src="" width="800" height="600">
`);

const refs = {
  galleryEl: document.querySelector('.gallery'),
  image: instance.element().querySelector('img'),
};

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

refs.galleryEl.insertAdjacentHTML('afterbegin', markUp);

const onGalleryItemClick = (e) => {
  e.preventDefault();
  refs.image.src = e.target.dataset.source;
  instance.show();
};

// const onGalleryItemClose = (e) => {
//   if () {

//   }
// };

refs.galleryEl.addEventListener('click', onGalleryItemClick);
// refs.galleryEl.addEventListener('keyDown', onGalleryItemClose);
