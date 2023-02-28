let divContainer = document.getElementById("container");
let divCreator = document.createElement("div");
let container = document.getElementById("container");
let squares = container.getElementsByClassName("square");

// Create container with div's
function squireCreator() {
  let i = 0;
  while (i < 256) {
    divContainer = document.getElementById("container");
    divCreator = document.createElement("div");
    divCreator.setAttribute("class", "square");
    divCreator.style.setProperty("width", "32px");
    divCreator.style.setProperty("height", "32px");
    // divCreator.textContent = `${i}`;
    divContainer.appendChild(divCreator);
    i++;
  }
}

squireCreator();

let isDrawing = false;

function draw(event) {
  if (isDrawing) {
    container = document.getElementById("container");
    squares = container.getElementsByClassName("square");
    for (let square of squares) {
      if (square === event.target) {
        square.classList.add("black");
      }
    }
  }
}

container.addEventListener("mousemove", draw);
container.addEventListener("mousedown", () => {
  isDrawing = true;
});
container.addEventListener("mouseup", () => {
  isDrawing = false;
});

let buttonSquarePromt4 = document.getElementById("squarePromt4");
let buttonSquarePromt8 = document.getElementById("squarePromt8");
let buttonSquarePromt16 = document.getElementById("squarePromt16");
let buttonSquarePromt32 = document.getElementById("squarePromt32");
let buttonSquarePromt64 = document.getElementById("squarePromt64");

function squireCreatorButton(row1, row2) {
  let i = 0;
  let x = row1 * row2;
  let y = 512 / row1;
  while (i < x) {
    divContainer = document.getElementById("container");
    divCreator = document.createElement("div");
    divCreator.setAttribute("class", "square");
    divCreator.style.setProperty("width", `${y}px`);
    divCreator.style.setProperty("height", `${y}px`);

    // divCreator.textContent = `${i}`;
    divContainer.appendChild(divCreator);
    i++;
  }
}

let row1;
let row2;

let clearButton = document.getElementById("clear");

clearButton.addEventListener("click", () => {
  removeAllChildNodes(divContainer);
  squireCreator();
});

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

buttonSquarePromt4.addEventListener("click", () => {
  row1 = 4;
  row2 = 4;
  removeAllChildNodes(divContainer);
  squireCreatorButton(row1, row2);
});

buttonSquarePromt8.addEventListener("click", () => {
  row1 = 8;
  row2 = 8;
  removeAllChildNodes(divContainer);
  squireCreatorButton(row1, row2);
});

buttonSquarePromt16.addEventListener("click", () => {
  row1 = 16;
  row2 = 16;
  removeAllChildNodes(divContainer);
  squireCreatorButton(row1, row2);
});

buttonSquarePromt32.addEventListener("click", () => {
  row1 = 32;
  row2 = 32;
  removeAllChildNodes(divContainer);
  squireCreatorButton(row1, row2);
});

buttonSquarePromt64.addEventListener("click", () => {
  row1 = 64;
  row2 = 64;
  removeAllChildNodes(divContainer);
  squireCreatorButton(row1, row2);
});
