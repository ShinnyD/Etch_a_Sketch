const resetButton = document.querySelector(".resetBtn");
const container = document.querySelector("#container");
const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return {r, g, b}
}

function createGrid (boxNumber){
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    for (let i = 0; i < boxNumber; i++){
            const row = document.createElement("div");
            row.classList.add("gridRow")
            for (let j = 0; j < boxNumber; j++){
                const {r, g, b} = randomColor();
                const widthAndHeight = 960 / boxNumber
                const gridBox = document.createElement("div");
                gridBox.classList.add("gridBox")
                gridBox.style.width = `${widthAndHeight}px`;
                gridBox.style.height = `${widthAndHeight}px`;

                gridBox.addEventListener("mouseenter", () => {
                    const bgColor = "rgb(" + r + "," + g + "," + b +")";
                    gridBox.style.backgroundColor = bgColor;
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

