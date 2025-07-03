let numOfSquaresPerSide = 16;
let heightWidth = "60px";

const container = document.querySelector(".sketch-container");
// Create rows
for (let i = 0; i < numOfSquaresPerSide; i++) {
    const flexRow = document.createElement("div");
    flexRow.classList.toggle("flexRow");
    flexRow.style.display = "flex";
    flexRow.style.gap = "10px";
    flexRow.style.justifyContent = "space-evenly";
    flexRow.style.alignItems = "center";
    flexRow.style.marginBottom = "10px";

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