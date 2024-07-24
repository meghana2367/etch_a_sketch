const root = document.querySelector(".container");
createBoard(16);
const button = document.querySelector("button");

button.addEventListener("click", () => {
    let size = prompt("Choose a number between 1 - 100");
    while (size == null || size == "" || isNaN(size) || size < 1 || size > 100) {
        size = prompt("Please input a valid value. Choose a number between 1 - 100");
    }
    deleteBoard();
    createBoard(size);
})

function deleteBoard() {
    let child = root.lastElementChild;
    while (child) {
        root.removeChild(child);
        child = root.lastElementChild;
    }
}

function createBoard(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.classList.add("item");
            div.style.height = `calc(60vh / ${size})`;
            div.style.width = `calc(60vh / ${size})`;
            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = randomColorGenerator();
            });
            div.addEventListener("mouseleave", function (divNode) {
                
            });
            root.appendChild(div);
        }
    }
}

function randomColorGenerator() {
    const l = '0123456789ABCDEF'; 
    let col = '#'; 
    for (let i = 0; i < 6; i++) { 
        col += l[Math.floor(Math.random() * 16)]; 
    } 
    return col; 
}


