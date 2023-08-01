const container = document.querySelector("#container");

let gridCount = 0;
while (gridCount < 32){
    const gridDivs = document.createElement("div");
    gridDivs.classList.add("content");
    gridDivs.textContent = "Hello World!";
    container.appendChild(gridDivs);
    gridCount++;
    console.log(gridCount);
}

/*function createGrid (boxNumber){
    for (let i = 0; i < boxNumber; i++){
            const row = container.appendChild(document.createElement("div"))
            console.log(boxNumber);
            for (let j = 0; j < boxNumber; j++){
                const box = document.createElement("div");
                box.className = "box";
                row.appendChild(box);
                console.log(boxNumber);
            }
    }
}

createGrid(15);*/