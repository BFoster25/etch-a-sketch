// Algorithm:
// 1) Starts with default grid
// 2) Have option to change the grid or get started coloring
// 3) If clear button is pressed, the grid clears, but still on current grid selected.
// 4) When grid is changed, the grid clears.

const grid = document.getElementById("container");
grid.id = "grid";
const gridRangeSlider = document.querySelector("#gridRangeSlider");
const clearButton = document.getElementById("clear");
const multicolor = document.querySelector("#multicolor");

let mLetter = document.createElement("span");
let uLetter = document.createElement("span");
let lLetter = document.createElement("span");
let tLetter = document.createElement("span");
let iLetter = document.createElement("span");
let cLetter = document.createElement("span");
let oLetter = document.createElement("span");
let lLetter2 = document.createElement("span");
let oLetter2 = document.createElement("span");
let rLetter = document.createElement("span");

mLetter.innerHTML = "M";
uLetter.innerHTML = "u";
lLetter.innerHTML = "l";
tLetter.innerHTML = "t";
iLetter.innerHTML = "i";
cLetter.innerHTML = "c";
oLetter.innerHTML = "o";
lLetter2.innerHTML = "l";
oLetter2.innerHTML = "o";
rLetter.innerHTML = "r";

function randomizeLetterColor(letter) {
    multicolor.append(letter);
    let r;
    let g;
    let b;
    r = getRandomInt();
    g = getRandomInt();
    b = getRandomInt();
    letter.style.color = "rgb(" + r + "," + g + "," + b + ")";
    return letter;
}


randomizeLetterColor(mLetter);
randomizeLetterColor(uLetter);
randomizeLetterColor(lLetter);
randomizeLetterColor(tLetter);
randomizeLetterColor(iLetter);
randomizeLetterColor(cLetter);
randomizeLetterColor(oLetter);
randomizeLetterColor(lLetter2);
randomizeLetterColor(oLetter2);
randomizeLetterColor(rLetter);


function getGridSize() {
    return gridRangeSlider.value;
}

function getRandomInt() {
    return Math.floor(Math.random() * 256);
}

function get10PercentOfInitialRGB(initialValue) {
    return parseInt(initialValue / 10);
}

function setGrid() {
    grid.style.setProperty('grid-template-columns', 'repeat(' + getGridSize() + ', 1fr)');
    grid.style.setProperty('grid-template-rows', 'repeat(' + getGridSize() + ', 1fr)');
}

function setSquareToWhite(square) {
    square.style.backgroundColor = "rgb(255, 255, 255)";
}

function getInitialColorValue() {
    return getRandomInt();
}

function setSquareToInitialColor(square) {
    let r = getInitialColorValue();
    let g = getInitialColorValue();
    let b = getInitialColorValue();
    square.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

function createGridWithSquares() {
    let square = document.createElement("div");
    square.classList.add("square");
    let gridWithSquares = grid.appendChild(square);
    return gridWithSquares;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function removeGridWithSquares() {
    removeAllChildNodes(grid);
}

for (let i = 0; i < Math.pow(getGridSize(), 2); i++) {
    setGrid(getGridSize());

    let r = getInitialColorValue();
    let g = getInitialColorValue();
    let b = getInitialColorValue();

    let square = createGridWithSquares();

    square.addEventListener("mouseover", function () {
        setSquareToInitialColor(square);
        if (r >= 0 && g >= 0 && b >= 0) {
            r -= get10PercentOfInitialRGB(getInitialColorValue());
            g -= get10PercentOfInitialRGB(getInitialColorValue());
            b -= get10PercentOfInitialRGB(getInitialColorValue());
            square.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
        } else {
            square.style.backgroundColor = "rgb(" + 0 + "," + 0 + "," + 0 + ")";
        }
    });
    clearButton.addEventListener("click", function () {
        setGrid(getGridSize());
        setSquareToWhite(square);

        let r = getInitialColorValue();
        let g = getInitialColorValue();
        let b = getInitialColorValue();

        square.addEventListener("mouseover", function () {
            setSquareToInitialColor(square);
            if (r >= 0 && g >= 0 && b >= 0) {
                r -= get10PercentOfInitialRGB(getInitialColorValue());
                g -= get10PercentOfInitialRGB(getInitialColorValue());
                b -= get10PercentOfInitialRGB(getInitialColorValue());
                square.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
            } else {
                square.style.backgroundColor = "rgb(" + 0 + "," + 0 + "," + 0 + ")";
            }
        });
    });
}

gridRangeSlider.addEventListener("change", function () {
    removeGridWithSquares();

    for (let i = 0; i < Math.pow(getGridSize(), 2); i++) {
        setGrid(getGridSize());

        let r = getInitialColorValue();
        let g = getInitialColorValue();
        let b = getInitialColorValue();

        let square = createGridWithSquares();

        square.addEventListener("mouseover", function () {
            square.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
            if (r >= 0 && g >= 0 && b >= 0) {
                r -= get10PercentOfInitialRGB(getInitialColorValue());
                g -= get10PercentOfInitialRGB(getInitialColorValue());
                b -= get10PercentOfInitialRGB(getInitialColorValue());
                square.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
            } else {
                square.style.backgroundColor = "rgb(" + 0 + "," + 0 + "," + 0 + ")";
            }
        });
        clearButton.addEventListener("click", function () {
            setGrid(getGridSize());
            setSquareToWhite(square);
            let r = getInitialColorValue();
            let g = getInitialColorValue();
            let b = getInitialColorValue();

            square.addEventListener("mouseover", function () {
                setSquareToInitialColor(square);
                if (r >= 0 && g >= 0 && b >= 0) {
                    r -= get10PercentOfInitialRGB(getInitialColorValue());
                    g -= get10PercentOfInitialRGB(getInitialColorValue());
                    b -= get10PercentOfInitialRGB(getInitialColorValue());
                    square.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
                } else {
                    square.style.backgroundColor = "rgb(" + 0 + "," + 0 + "," + 0 + ")";
                }
            });
        });
    }
});