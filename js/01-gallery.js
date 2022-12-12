import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('div.gallery');
const listGallery = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', listGallery);
galleryContainer.addEventListener('click', onGalleryContainerClick);



const modalWindow = basicLightbox.create(`<img class="modal-image" src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg" alt="image">`,
{
    onShow: (modalWindow) => {
      document.addEventListener('keydown', CloseModalKeydown);
    },
    onclose: (modalWindow) => {
      document.removeEventListener('keydown', CloseModalKeydown);
    },
  }
);


function onGalleryContainerClick(e) {
    e.preventDefault();
    
    const isGalleryImage = e.target.classList.contains('gallery__image');
    if (!isGalleryImage) {
        return;
    }

    const imageDataSet = e.target.getAttribute('data-source');
    const imageDescription = e.target.getAttribute('alt');

    viewLargeSizeImage(imageDataSet, imageDescription);
}

function createGalleryItems(gallery) {
    return gallery.map(({ preview, original, description }) => {
        return `
         <div class="gallery__item">
          <a class="gallery__link" href="${original}">
           <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
            </a>
          </div>`;
    })
        .join('');
}


function viewLargeSizeImage(url, description) {
    const modalImage = modalWindow.element().querySelector('.modal-image');
    modalImage.setAttribute('src', url);
    modalImage.setAttribute('alt', description);
    modalWindow.show();
    
}

function CloseModalKeydown(e) {
    if (e.code === 'Escape') {
        modalWindow.close();
    }
}