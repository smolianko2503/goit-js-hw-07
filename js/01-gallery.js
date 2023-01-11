import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) =>
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
).join('');

gallery.innerHTML = markup;


gallery.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return
    }

    const urlOriginalImage = evt.target.getAttribute("data-source");
    const instance = basicLightbox.create(`
    
       <img src="${urlOriginalImage}" widt = "800" heigth = "600">
`)

  instance.show();
})






