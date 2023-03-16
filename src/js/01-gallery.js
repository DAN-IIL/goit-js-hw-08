// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryItemList = makeGalleryGrid(galleryItems);

galleryEl.insertAdjacentHTML('afterbegin', galleryItemList);

function makeGalleryGrid(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`}).join('');
    }

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
});
