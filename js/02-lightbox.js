import { galleryItems } from './gallery-items.js';


const galleryEl = document.querySelector('.gallery');

const onImgClick = (event) => {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    };

    const simpleLightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionsData: 'alt',
    })

    function closeModal(event) {
        if (event.code === 'Escape') {
            lightbox.close();
        };
    };

}; 
galleryEl.addEventListener('click', onImgClick);

const createGalletyElements = items => {
    return items.map(item => {
        galleryEl.insertAdjacentHTML(`beforeend`, `
        <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}">
        </a>`);
    });
};
createGalletyElements(galleryItems);
