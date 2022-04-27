// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// **BONUS:**
// 1 - L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// **2- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
// ****3- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
document.getElementById("play").addEventListener("click", startGame);

function startGame() {

    // Make "h2" disappear when the function starts
    const mainTitle = document.getElementById("title-d-none")
    mainTitle.classList.add("d-none")

    // Make the grid appear when the function starts
    const genGridContainer = document.getElementById("grid");
    genGridContainer.classList.add("grid-container");

    // Declare a variable for the difficulty chosen
    let difficulty = document.getElementById("difficulty").value;
    console.log(difficulty);

    // 1 - Choose to generate numbers, then pass the function "genGridNumb" to pass the array
    let gridSize;
    if (difficulty == "easy") {
        gridSize = 100;
    } else if (difficulty == "medium") {
        gridSize = 81;
    } else if (difficulty == "hard") {
        gridSize = 49;
    }
    let gridArray = genGridNumb(gridSize);
    // Generate bomb cells
    const maxNumb = gridSize;
    const bombArray = genBombArray(1, maxNumb);
    console.log(bombArray);

    // 2 - Each number of the array creates a grid cell and if the user click on a cell it gets painted
    const gridContainer = document.getElementById("grid");
    gridContainer.innerHTML = "";
    let clickedNumbCounter = 0;

    for (let i = 0; i < gridArray.length; i++) {
        const itemNumb = gridArray[i];
        let domElement;
        
        if (difficulty == "easy") {
            let domElement = genGridCellEasy(itemNumb);
            domElement.addEventListener("click", function cellClick() {
                const clickedNumb = parseInt(this.querySelector("span").textContent);
                
                if ( bombArray.includes(clickedNumb) ) {
                    this.classList.add("active-bomb");

                    const endTitle = document.getElementById("end-title-d-none");
                    endTitle.classList.remove("d-none");
                    endTitle.innerHTML = `<h2>Hai totalizzato ${clickedNumbCounter} punti!<h2>`

                } else {
                    this.classList.add("active");
                    this.style.pointerEvents = "none";
                    clickedNumbCounter++;
                };
            });
            gridContainer.append(domElement);
        } else if (difficulty == "medium") {
            let domElement = genGridCellMedium(itemNumb)
            domElement.addEventListener("click", function cellClick() {
                const clickedNumb = parseInt(this.querySelector("span").textContent);
                
                if ( bombArray.includes(clickedNumb) ) {
                    this.classList.add("active-bomb");

                    const endTitle = document.getElementById("end-title-d-none");
                    endTitle.classList.remove("d-none");
                    endTitle.innerHTML = `<h2>Hai totalizzato ${clickedNumbCounter} punti!<h2>`

                } else {
                    this.classList.add("active");
                    this.style.pointerEvents = "none";
                    clickedNumbCounter++;
                };
            });
            gridContainer.append(domElement);
        } else if (difficulty == "hard") {
            let domElement = genGridCellHard(itemNumb)
            domElement.addEventListener("click", function cellClick() {
                const clickedNumb = parseInt(this.querySelector("span").textContent);
                
                if ( bombArray.includes(clickedNumb) ) {
                    this.classList.add("active-bomb");

                    const endTitle = document.getElementById("end-title-d-none");
                    endTitle.classList.remove("d-none");
                    endTitle.innerHTML = `<h2>Hai totalizzato ${clickedNumbCounter} punti!<h2>`

                } else {
                    this.classList.add("active");
                    this.style.pointerEvents = "none";
                    clickedNumbCounter++;
                };
            });
            gridContainer.append(domElement);
        }  
    }
}

// FUNCTIONS

//FUNCTION - 1 - GRID-GENERATOR
/**
 * Description -> Creates an array necessary to create the grid used to play the game
 * @param {integer} gridNumbCount -> Used to pass the value chosen in the function "startGame" to the max of the array described in this function
 * @returns {array} -> Returns an array from 1 to a number chosen in the function "startGame"
 */

function genGridNumb(gridNumbCount) {
    const numbers = [];
    for (let i = 0; i < gridNumbCount; i++) {
        numbers[i] = i + 1;
    }
    console.log(numbers)
    return numbers;
}

// FUNCTIONS - 2-3-4 - CELLS-GENERATORS

// 2 - EASY
/**
 * Description -> Creates the cells contained inside the grid (EASY - 100 cells)
 * @param {Integer} number -> Used to pass the numbers in the array used by the function "startGame" to the span elements inside the grid
 * @returns {html-element} -> Returns the code to create span elements to generate grid cells in html
 */

function genGridCellEasy(number) {
    const newElement = document.createElement("div");

    newElement.innerHTML = `<span>${number}</span>`

    newElement.classList.add("grid-item-easy");

    return newElement;
}

// 3 - MEDIUM
/**
 * Description -> Creates the cells contained inside the grid (MEDIUM - 81 cells)
 * @param {Integer} number -> Used to pass the numbers in the array used by the function "startGame" to the span elements inside the grid
 * @returns {html-element} -> Returns the code to create span elements to generate grid cells in html
 */

 function genGridCellMedium(number) {
    const newElement = document.createElement("div");

    newElement.innerHTML = `<span>${number}</span>`

    newElement.classList.add("grid-item-medium");

    return newElement;
}

// 4 - HARD
/**
 * Description -> Creates the cells contained inside the grid (HARD - 49 cells)
 * @param {Integer} number -> Used to pass the numbers in the array used by the function "startGame" to the span elements inside the grid
 * @returns {html-element} -> Returns the code to create span elements to generate grid cells in html
 */

 function genGridCellHard(number) {
    const newElement = document.createElement("div");

    newElement.innerHTML = `<span>${number}</span>`

    newElement.classList.add("grid-item-hard");

    return newElement;
}

// fUNCTION - 5 - BOMB-ARRAY-GENERATOR
/**
 * Description -> Creates bomb cells contained inside the grid
 * @param {number} min -> Min Value
 * @param {number} max -> Max Value
 * @returns {array} bombArray -> The array containing the bomb cells numbers
 */
function genBombArray(min, max) {
    const bombArray = [];
    const bombNumber = 16;
 
    while (bombArray.length < bombNumber) {
        const rndNumb = getRndInteger(min, max);
        if ( !bombArray.includes(rndNumb) ) {
            bombArray.push(rndNumb);
        }
    }
    
    return bombArray;
}

// FUNCTION - 6 - RANDOM-INTEGER-GENERATOR
/**
 * Description
 * @param {integer} min -> Smallest value
 * @param {integer} max -> Max value 
 * @returns {integer} -> Return one random integer between min and max
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}