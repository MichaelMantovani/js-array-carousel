console.log('JS OK')


// Recupero gli elementi dal DOM
const gallery = document.getElementById('gallery');
const thumbnail = document.getElementById('thumbnail')
const next = document.getElementById('next')
const prev = document.getElementById('prev');


// Creo un array con le immagini 
const imagesGallery = ['img/01.webp' , 'img/02.webp' , 'img/03.webp' , 'img/04.webp' , 'img/05.webp'];
console.log(imagesGallery)


// Inserisco le immagini nel DOM
let imagesElement = ''

for (i = 0; i < imagesGallery.length; i++) {
  imagesElement += `<img src="${imagesGallery[i]}" alt="Pictures ${i + 1}">`
}

gallery.innerHTML = imagesElement
thumbnail.innerHTML = imagesElement



// Mostro la prima 
const images = document.querySelectorAll('#gallery img')
const thumbnailImages = document.querySelectorAll('#thumbnail img')



let currentIndex = 0;

images[currentIndex].classList.add('active');
thumbnailImages[currentIndex].classList.add('thumbnail-active');







// Quando clicco sulla freccia destra scorro le immagini verso destra
next.addEventListener('click', function(){

  // Nascondo l'immagine visulizzata
  images[currentIndex].classList.remove('active');

  // Rendo opaca l'immagine nella thumbnail
  thumbnailImages[currentIndex].classList.remove('thumbnail-active');
  
  
  // Avanzo di un'immagine
  currentIndex++;


  // SE l'immagine selezionata è la l'ultima seleziono la prima immagine dell'array
  if(currentIndex === images.length) currentIndex = 0;
            
  // Mostro l'immagine selezionata
  images[currentIndex].classList.add('active');
  thumbnailImages[currentIndex].classList.add('thumbnail-active');
  
  
})



// Quando clicco sulla freccia sinistra scorro le immagini verso sinistra
prev.addEventListener('click', function(){

  // Nascondo l'immagine visulizzata
  images[currentIndex].classList.remove('active');

  // Rendo opaca l'immagine nella thumbnail
  thumbnailImages[currentIndex].classList.remove('thumbnail-active');


  
  // Retrocedo di un'immagine
  currentIndex--;


  // SE l'immagine selezionata è la prima seleziono l'ultima immagine dell'array
  if(currentIndex < 0) currentIndex = (images.length - 1);
  
            
  // Mostro l'immagine selezionata
  images[currentIndex].classList.add('active');
  thumbnailImages[currentIndex].classList.add('thumbnail-active');
  
  
  
})




