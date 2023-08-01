const container = document.querySelector("#container");
let sizeOfGrid = 16

function createGrid (boxNumber){
    for (let i = 0; i < boxNumber; i++){
            const row = document.createElement("div");
            row.classList.add("gridRow")
            for (let j = 0; j < boxNumber; j++){
                const widthAndHeight = 960 / sizeOfGrid
                const gridBox = document.createElement("div");
                gridBox.classList.add("gridBox")
                gridBox.style.width = `${widthAndHeight}px`;
                gridBox.style.height = `${widthAndHeight}px`;

                gridBox.addEventListener("mouseenter", () => {
                    gridBox.style.backgroundColor = "black";
                })

                row.appendChild(gridBox);
            }
        container.appendChild(row);
    }
}

createGrid(sizeOfGrid);


/*function makeRows (rows, columns){
    for (let i = 0; i < rows; i++)
}*/

/*let gridCount = 0;
while (gridCount < 256){
    const gridDivs = document.createElement("div");
    gridDivs.classList.add("content");
    gridDivs.textContent = "Box";
    container.appendChild(gridDivs);
    gridCount++;
    console.log(gridCount);
}*/