const container = document.getElementById("container");
const squares = container.getElementsByClassName("square");

// Create container with div's
function squareCreator() {
  let i = 0;
  while (i < 256) {
    const divCreator = document.createElement("div");
    divCreator.classList.add("square");
    divCreator.style.width = "32px";
    divCreator.style.height = "32px";
    // divCreator.textContent = `${i}`;
    container.appendChild(divCreator);
    i++;
  }
}

squareCreator();

let isDrawing = false;

function draw(event) {
  if (isDrawing) {
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

const buttonSquarePrompts = {
  4: document.getElementById("squarePromt4"),
  8: document.getElementById("squarePromt8"),
  16: document.getElementById("squarePromt16"),
  32: document.getElementById("squarePromt32"),
  64: document.getElementById("squarePromt64"),
};

function squareCreatorButton(rows, columns) {
  const totalSquares = rows * columns;
  const squareSize = 512 / rows;

  let i = 0;
  while (i < totalSquares) {
    const divCreator = document.createElement("div");
    divCreator.classList.add("square");
    divCreator.style.width = `${squareSize}px`;
    divCreator.style.height = `${squareSize}px`;

    // divCreator.textContent = `${i}`;
    container.appendChild(divCreator);
    i++;
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", () => {
  removeAllChildNodes(container);
  squareCreator();
});

Object.keys(buttonSquarePrompts).forEach((key) => {
  const button = buttonSquarePrompts[key];
  button.addEventListener("click", () => {
    removeAllChildNodes(container);
    squareCreatorButton(key, key);
  });
});
