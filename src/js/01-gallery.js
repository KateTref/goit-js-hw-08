import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const picturesMarkup = createPicturesMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', picturesMarkup);

function createPicturesMarkup(Items) {
    return Items
        .map(({ preview, original, description }) => {
            return `
       <li class="gallery__item>
       <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
       </a>
       </li>
`}).join('');
};

 const lightbox = new SimpleLightbox('.gallery li', { captionsData: "alt", captionsDelay: 250 });
