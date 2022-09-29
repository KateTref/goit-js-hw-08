import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const picturesMarkup = createPicturesMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', picturesMarkup);

function createPicturesMarkup(Items) {
    return Items
        .map(({ preview, original, description }) => {
            return `
       <div class="gallery__item>
       <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
       </a>
       </div>
`}).join('');
};

const lightbox = new SimpleLightbox('.gallery div', {
        captionType: 'attr',
        animationSpeed: 250,
        captionsData:'alt',
        fadeSpeed: 250,
        captionDelay: 250,
    });

