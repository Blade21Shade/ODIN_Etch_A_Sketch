let numOfSquaresPerSide = 16;

const container = document.querySelector(".sketch-container");
for (let i = 0; i < numOfSquaresPerSide; i++) {
    const flexRow = document.createElement("div");
    flexRow.classList.toggle("flexRow");
    flexRow.style.display = "flex";
    flexRow.style.gap = "10px";
    for (let j = 0; j < numOfSquaresPerSide; j++) {
        const sketchBox = document.createElement("div");
        sketchBox.classList.toggle("sketch-box");
        flexRow.appendChild(sketchBox);
    }
    container.appendChild(flexRow);
}