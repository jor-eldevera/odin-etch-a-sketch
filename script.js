const squaresContainer = document.querySelector(".squares-container");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        squaresContainer.appendChild(square);

        square.addEventListener("mouseover", (e) => {
            e.target.style.background = "black";
        });
    }
}