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
// moja gale
