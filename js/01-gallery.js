import { galleryItems } from './gallery-items.js';


const galleryEl = document.querySelector('.gallery');

const onImgClick = (event) => {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    };
    const instance = basicLightbox.create(`<img width="800" height="600" src="${event.target.dataset.source}">`,
        {
            onShow: instance => {
                window.addEventListener('keydown', closeModal);
            },
            onClose: instance => {
                window.removeEventListener('keydown', closeModal);
            },
        },
    );
    function closeModal(event) {
        if (event.code === 'Escape') {
            instance.close();
        };
    };
    instance.show();
}; 
galleryEl.addEventListener('click', onImgClick);

const createGalletyElements = items => {
    return items.map(item => {
        galleryEl.insertAdjacentHTML(`beforeend`, `<div class = 'gallery__item'>
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}">
        </a></div>`);
    });
};
createGalletyElements(galleryItems);
