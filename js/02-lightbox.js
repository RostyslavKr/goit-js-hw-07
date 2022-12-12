import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('ul.gallery');
const listGallery = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', listGallery);
galleryContainer.addEventListener('click', onGalleryContainerClick);

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
    captionPosition: 'bottom',
    overlayOpacity: 0.8,
    scrollZoom: false,
});


function createGalleryItems(gallery) {
    return gallery.map(({ preview, original, description }) => {
        return `
         <a class="gallery__item" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
         </a>`;
        })
        .join('');
}


function onGalleryContainerClick(e) {
    e.preventDefault();

    const isGalleryImage = e.target.classList.contains('gallery__image');
    if (!isGalleryImage) {
        return;
    }
    
}


