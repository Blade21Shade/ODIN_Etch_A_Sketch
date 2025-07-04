// Data
const defaultNumOfSquares = 16;
const minimumNumOfSquares = 1;
const maximumNumOfSquares = 100;

const defaultNumOfPixels = 960;
const minimumNumOfPixels = 200;
const maximumNumOfPixels = 1200;

let numOfSquaresPerSide = defaultNumOfSquares;
let numOfPixelsPerSide = defaultNumOfPixels;
let heightWidth = numOfPixelsPerSide/numOfSquaresPerSide;
const container = document.querySelector(".sketch-container");

// Functions for filling the grid
function createRows() {
    for (let i = 0; i < numOfSquaresPerSide; i++) {
        const flexRow = document.createElement("div");
        flexRow.classList.toggle("flexRow");
        flexRow.style.display = "flex";
        flexRow.style.flex = "1";
        flexRow.style.justifyContent = "space-evenly";
        flexRow.style.alignItems = "center";
        createSquaresForRow(flexRow);
        container.appendChild(flexRow);   
    }
}

function createSquaresForRow(flexRow) {
    for (let j = 0; j < numOfSquaresPerSide; j++) {
        const sketchSquare = document.createElement("div");
        sketchSquare.style.height = `${heightWidth}px`;
        sketchSquare.style.width = `${heightWidth}px`;
        sketchSquare.classList.toggle("sketch-square");
        flexRow.appendChild(sketchSquare);
    }
}

// This event listener will cause each square to "draw"
// The event listener is added to the container so only one listener is needed for the whole page, instead of one per row or even worse one per square
container.addEventListener("mouseover", e => {
    if (e.target.classList.contains("sketch-square")) {
        e.target.classList.toggle("activated-square");
    }
});

// Button logic
const clearGridButton = document.querySelector(".clear-grid-button");
clearGridButton.addEventListener("click", () => {
    const squares = document.querySelectorAll(".sketch-square");
    squares.forEach(square => {
        if (square.classList.contains("activated-square")) {
            square.classList.toggle("activated-square");
        }
    });
});

const changeSquaresPerSideButton = document.querySelector(".change-squares-per-side-button");
changeSquaresPerSideButton.addEventListener("click", () => {
    let userNum = parseInt(prompt(
`Enter the number of squares you want per side of the grid
(This is a square, so each side will have the same number)

Current number: ${numOfSquaresPerSide} (Max 100)`));

    updateGridVariable(minimumNumOfSquares, maximumNumOfSquares, defaultNumOfSquares, userNum, "square");
    heightWidth = numOfPixelsPerSide/numOfSquaresPerSide;
    container.replaceChildren();
    createRows();
});

const changeGridSizeButton = document.querySelector(".change-grid-size-button");
changeGridSizeButton.addEventListener("click", () => {
    let userNum = parseInt(prompt(
`Enter the number of pixels you want per side of the grid
(This is a square, so each side will have the same number)


Current number: ${numOfPixelsPerSide} (Min: 200 Max: 1200)`));

    updateGridVariable(minimumNumOfPixels, maximumNumOfPixels, defaultNumOfPixels, userNum, "pixel");
    container.style.width = `${numOfPixelsPerSide}px`;
    container.style.height = `${numOfPixelsPerSide}px`;
    container.replaceChildren();
    createRows(); 
});

function updateGridVariable(min, max, defaultVal, input, variable) {
    if (Number.isNaN(input)) {
        input = defaultVal;
    }
    
    if (input < min) {
        input = min;
    } else if (input > max) {
        input = max;
    }

    switch(variable) {
        case "pixel":
            numOfPixelsPerSide = input;
            break;
        case "square":
            numOfSquaresPerSide = input;
            break;
    }
    heightWidth = numOfPixelsPerSide/numOfSquaresPerSide;
}

// Start the page
container.style.width = `${numOfPixelsPerSide}px`;
container.style.height = `${numOfPixelsPerSide}px`;
container.replaceChildren();
createRows();