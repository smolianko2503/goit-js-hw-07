import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(SimpleLightbox)

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) =>
`<li>
   <a class="gallery__item"
   href="${original}">
   <img class="gallery__image"
   src="${preview}" 
   alt="${description}" />
   </a>
</li>
`
).join('');

gallery.innerHTML = markup;

const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
gallery.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return
    }
})


