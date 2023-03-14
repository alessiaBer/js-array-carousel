// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

/**** MILESTONE 1
Per prima cosa, creiamo il markup statico:
costruiamo il container e inseriamo un'immagine grande al centro:
avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.***/


/**** MILESTONE 2
Adesso rimuoviamo tutto il markup statico
Inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, 
ma costruito dinamicamente attraverso JavaScript.*/

//creo l'array delle immagini
const imgArray = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp'
];

//seleziono l'elemento .carousel dal DOM e lo assegno ad una variabile
const carouselEl = document.querySelector('.carousel');

//creo una variabile per l'img attiva settata all'index 0
let activeImg = 0;
// creo un loop che passi ogni immagine dell'array 
for (let i = 0; i < imgArray.length; i++) {
    //assegno ad una variabile ogni immagine dell'array usando l'index 
    const images = imgArray[i];
    //creo l'elemento HTML per l'img e lo assegno ad una variabile, l'elemento avrà una classe dinamica e il src in base all'index dell'array
    const imgEl = `<img class="img ${i === activeImg ? 'active' : ''}" src="${images}">`;
    //inserisco l'elemento HTML per l'img nel .carousel presente nell'html
    carouselEl.insertAdjacentHTML('beforeend', imgEl);
}

/**** MILESTONE 3
Al click dell'utente sulle frecce, 
il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.*/