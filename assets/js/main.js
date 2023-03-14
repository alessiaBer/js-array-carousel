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
il programma cambierà l’immagine attiva, 
che quindi verrà visualizzata al posto della precedente.*/

//seleziono tutte le immagini create nel DOM e le assegno ad una variabile
const allImgEl = document.querySelectorAll('.carousel > .img');
//seleziono dal DOM il btn .next
const nextBtn = document.querySelector('.next');
//seleziono dal DOM il btn .prev
const prevBtn = document.querySelector('.prev');


//assegno al btn .next un eventListener per il click
nextBtn.addEventListener('click', function() {
    //seleziono l'indice dell'img attiva e la assegno ad una variabile
    const currentImg = allImgEl[activeImg];
    console.log(currentImg)
    //rimuovo dall'img corrente la class active
    currentImg.classList.remove('active');
    //incremento il valore dell'index dell'activeImg
    activeImg++;
    
    //aggiungo un if statement per fermare l'incremento quando si arriva all'ultima img e far ripartire da capo
    if (activeImg > 4) {
        activeImg = 0;
    }

    //seleziono l'img successiva e la assegno ad una variabile
    const nextImg = allImgEl[activeImg];
    //aggiungo all'immagine successiva la classe active
    nextImg.classList.add('active');

    

})

//assegno al btn .prev un eventListener per il click
prevBtn.addEventListener('click', function() {
    //seleziono l'indice dell'img attiva e la assegno ad una variabile
    const currentImg = allImgEl[activeImg];
    console.log(currentImg)
    //rimuovo dall'img corrente la class active
    currentImg.classList.remove('active');
    //decremento il valore dell'index dell'activeImg
    activeImg--;

    //aggiungo un if statement per fermare il decremento quando si arriva alla prima immagine e ricominciare dall'ultima
    if (activeImg < 0) {
        activeImg = 4;
    }

    //seleziono l'img precedente e la assegno ad una variabile
    const prevImg = allImgEl[activeImg];
    //aggiungo all'immagine successiva la classe active
    prevImg.classList.add('active');
})

/* BONUS 1:
Aggiungere il ciclo infinito del carosello. 
Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, 
dovrà comparire l’ultima immagine dell’array e viceversa */



/* BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. 
Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva */