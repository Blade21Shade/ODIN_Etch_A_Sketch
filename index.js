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
        createBoxesForRow(flexRow);
        container.appendChild(flexRow);   
    }
}

function createBoxesForRow(flexRow) {
    for (let j = 0; j < numOfSquaresPerSide; j++) {
        const sketchBox = document.createElement("div");
        sketchBox.style.height = `${heightWidth}px`;
        sketchBox.style.width = `${heightWidth}px`;
        sketchBox.classList.toggle("sketch-box");
        flexRow.appendChild(sketchBox);
    }
}

// This event listener will cause each box to "draw"
// The event listener is added to the container so only one listener is needed for the whole page, instead of one per row or even worse one per box
container.addEventListener("mouseover", e => {
    if (e.target.classList.contains("sketch-box")) {
        e.target.classList.toggle("activated-box");
    }
});

// Button logic
const clearGridButton = document.querySelector(".clear-grid-button");
clearGridButton.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".sketch-box");
    boxes.forEach(box => {
        if (box.classList.contains("activated-box")) {
            box.classList.toggle("activated-box");
        }
    });
});

const changeBoxesPerSideButton = document.querySelector(".change-boxes-per-side-button");
changeBoxesPerSideButton.addEventListener("click", () => {
    let userNum = parseInt(prompt(
`Enter the number of boxes you want per side of the grid
(This is a square, so each side will have the same number)

Current number: ${numOfSquaresPerSide} (Max 100)`));

    updateGridVariable(minimumNumOfSquares, maximumNumOfSquares, defaultNumOfSquares, userNum, "box");
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
        case "box":
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