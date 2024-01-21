

const heading = document.createElement('h1');
const text = document.createTextNode("ETCH-A-SKETCH")
heading.appendChild(text);
document.body.appendChild(heading);


const outerbox = document.createElement('div');
outerbox.classList.add("outerbox");
document.body.appendChild(outerbox);


const btn1 = document.createElement('button');
const txt1 = document.createTextNode("grid size");
btn1.appendChild(txt1);
outerbox.appendChild(btn1);

const innerbox = document.createElement('div');
innerbox.classList.add("innerbox");
outerbox.appendChild(innerbox);

const btn2 = document.createElement('button');
const txt2 = document.createTextNode("clear");
btn2.appendChild(txt2);
outerbox.appendChild(btn2);

let size = 25;

btn1.addEventListener('click', () => {
    size = prompt("Enter the size");
    rendersize(size);
});

btn2.addEventListener('click', () => {
    clearGrid();
});

function rendersize(size) {
    innerbox.innerHTML = '';

    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            let c = document.createElement('div');
            innerbox.appendChild(c);
        }
    }

    // Set styles for the innerbox
    innerbox.style.display = "grid";
    innerbox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    innerbox.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const accessDiv = innerbox.querySelectorAll("div");

    accessDiv.forEach((n) => {
        n.addEventListener("mouseover", () => {
            n.style.backgroundColor = "#9333ea";
        });
    });
}

function clearGrid() {
    const accessDiv = innerbox.querySelectorAll("div");

    accessDiv.forEach((n) => {
        n.style.backgroundColor = ""; // Reset background color
    });
}
+ 
// Initial setup
rendersize(size);
