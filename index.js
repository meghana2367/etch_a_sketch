const root = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const div = document.createElement("div");
        div.classList.add("item");
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "#FFB6C1";
        });
        div.addEventListener("mouseleave", function (divNode) {
            
        });
        root.appendChild(div);
    }
}


