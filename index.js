// Data
let numOfSquaresPerSide = 16;
let heightWidth = 960/numOfSquaresPerSide;
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

const newGridButton = document.querySelector(".new-grid-button");
newGridButton.addEventListener("click", () => {
    let userNum = prompt(`Enter number of boxes you want for width and height\nCurrent number: ${numOfSquaresPerSide} (Max 100)`);
    if (userNum < 1) {
        userNum = 1;
    } else if (userNum > 100) {
        userNum = 100;
    }
    numOfSquaresPerSide = userNum;
    heightWidth = 960/numOfSquaresPerSide;
    container.replaceChildren();
    createRows();
});

// Start the page
container.replaceChildren();
createRows();