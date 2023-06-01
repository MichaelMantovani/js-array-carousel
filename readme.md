# Carosello Mono Array

**Traccia**
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato. Potete anche usare immagini diverse e variare leggermente lo stile, l'importante è la logica!

<br>
<br>

**Milestone 1**
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

<br>
<br>

**Milestone 2**
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

<br>
<br>

**Milestone 3**
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

<br>
<br>

**Bonus 1**
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparre l'ultima e viceversa!

<br>
<br>

**Bonus 2** 
Aggiungere la visualizzazione di tutte le thumbnails in basso o sulla destra dell’immagine grande attiva, (usate lo screen in allegato come ispirazione). Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.


**SVOLGIMENTO TRACCIA**

- Creo il markup statico
- Recupero gli elementi dal DOM
- Creo un array con le immagini 
**FIN TANTO CHE** ho delle immagini nell'array      
  - le inserisco nel DOM
- Mostro la prima immagine 
**QUANDO** clicco sulla freccia di destra 
    - Nascondo l'immagine visulizzata
    - Avanzo di un'immagine
    **SE** l'immagine selezionata è la l'ultima dell'array
      - Seleziono la prima immagine dell'array
    - Mostro l'immagine selezionata
**QUANDO** clicco sulla freccia di sinistra
    - Nascondo l'immagine visulizzata
    - Retrocedo di un'immagine 
    **SE** l'immagine selezionata è la prima dell'array
      - Seleziono l'ultimas immagine dell'array
    - Mostro l'immagine selezionata



