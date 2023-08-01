const resetButton = document.querySelector(".resetBtn");
const container = document.querySelector("#container");

function createGrid (boxNumber){
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    for (let i = 0; i < boxNumber; i++){
            const row = document.createElement("div");
            row.classList.add("gridRow")
            for (let j = 0; j < boxNumber; j++){
                const widthAndHeight = 960 / boxNumber
                const gridBox = document.createElement("div");
                gridBox.classList.add("gridBox")
                gridBox.style.width = `${widthAndHeight}px`;
                gridBox.style.height = `${widthAndHeight}px`;

                gridBox.addEventListener("mouseenter", () => {
                    gridBox.style.backgroundColor = "black";
                })

                row.appendChild(gridBox);
            }
        wrapper.appendChild(row);
    }
    container.appendChild(wrapper);
}

resetButton.addEventListener("click", () => {
    let userSize = Number(prompt("What dimensions do you want for the new grid?"));
    while (userSize > 100) {
        userSize = Number(prompt("What dimensions do you want for the new grid? -pls under 100"));     
    }
    
    const wrapper = document.querySelector(".wrapper");

    if (!wrapper) {
    createGrid(userSize);
    } else {
    wrapper.remove();
    createGrid(userSize);
    }
    
})


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