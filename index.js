// Data
let numOfSquaresPerSide = 16;
let heightWidth = "60px";
const container = document.querySelector(".sketch-container");

// Non-function logic
// Create rows
for (let i = 0; i < numOfSquaresPerSide; i++) {
    const flexRow = document.createElement("div");
    flexRow.classList.toggle("flexRow");
    flexRow.style.display = "flex";
    flexRow.style.gap = "10px";
    flexRow.style.justifyContent = "space-evenly";
    flexRow.style.alignItems = "center";
    flexRow.style.marginBottom = "10px";

    // Each row will have an event listener to check when a box in the row is moused over
    // This means there are numOfSquaresPerSide event listeners as there is one per row, instead of one for each box which would be numOf...^2 listeners
    flexRow.addEventListener("mouseover", e => {
        if (e.target.classList.contains("sketch-box")) {
            e.target.classList.toggle("activated-box");
        }
    });

    // Create squares in each row
    for (let j = 0; j < numOfSquaresPerSide; j++) {
        const sketchBox = document.createElement("div");
        sketchBox.style.height = heightWidth;
        sketchBox.style.width = heightWidth;
        sketchBox.classList.toggle("sketch-box");
        flexRow.appendChild(sketchBox);
    }
    
    container.appendChild(flexRow);
}