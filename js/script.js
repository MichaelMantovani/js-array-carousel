console.log('JS OK')


// Recupero gli elementi dal DOM
const gallery = document.getElementById('gallery');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

// Creo un array con le immagini 
const imagesGallery = ['img/01.webp' , 'img/02.webp' , 'img/03.webp' , 'img/04.webp' , 'img/05.webp'];


// Inserisco le immagini nel DOM
let imagesElement = ''

for (i = 0; i < imagesGallery.length; i++) {
  imagesElement += `<img src="${imagesGallery[i]}" alt="Pictures ${i + 1}">`
}
gallery.innerHTML = imagesElement



// Mostro la prima 
const images = document.querySelectorAll('#gallery img')

let currentIndex = 0;

images[currentIndex].classList.add('active');