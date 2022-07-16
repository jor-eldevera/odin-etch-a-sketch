const squaresContainer = document.querySelector(".squares-container");
const btn = document.querySelector("button");

let gridSize = 16;

btn.addEventListener("click", (e) => {
    let newGridSize = prompt("How big should the grid be? Enter a number from 0 to 100.");
    if (newGridSize) {
        gridSize = newGridSize;
    }
    createGrid();
});

createGrid();

function createGrid() {
    // First erase the grid
    while (squaresContainer.firstChild) {
        squaresContainer.removeChild(squaresContainer.firstChild);
    }

    // Then change the grid size
    let cellWidth = (550 / gridSize) - 2;
    squaresContainer.style.gridTemplateColumns = `repeat(${gridSize}, ${cellWidth}px)`;
    squaresContainer.style.gridTemplateRows = `repeat(${gridSize}, ${cellWidth}px)`;

    // Finally fill the grid in with cells
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");
            squaresContainer.appendChild(square);
    
            square.addEventListener("mouseover", (e) => {
                e.target.style.background = "black";
            });
        }
    }
}
