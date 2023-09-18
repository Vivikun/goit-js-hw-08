import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
// Change code below this line
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const galleryImageList = galleryItems
  .map(image => {
    return `<a href="${image.original}">
      <img src="${image.preview}" alt="${image.description}" />
    </a>`;
  })
  .join('');

gallery.innerHTML = galleryImageList;
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);

// const fotoGallery = document.querySelector('.gallery');
// const getFotoGallery = galleryItems
//   .map(
//     ({
//       preview,
//       original,
//       description,
//     }) => ` <a class="gallery__item" href="${original}">
//     <img class="gallery__image" src="${preview}" alt="${description}" />
// </a>`
//   )
//   .join(' ');
// fotoGallery.insertAdjacentHTML('beforeend', getFotoGallery);
// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionPosition: 'outside',
//   captionDelay: 250,
//   nav: false,
//   close: false,
//   showCounter: false,
// });
// console.log(galleryItems);
