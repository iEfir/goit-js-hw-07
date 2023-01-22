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

const createGalletyElements = galleryItems.map(element => {
    const container = document.createElement('div');
    container.classList.add('gallery__item');

    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = `${element.original}`;
    
    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = `${element.preview}`;
    image.setAttribute('data-source', `${element.original}`);
    image.alt = `${element.description}`;

    link.appendChild(image);
    container.appendChild(link);
    return container;
});

galleryEl.append(...createGalletyElements);