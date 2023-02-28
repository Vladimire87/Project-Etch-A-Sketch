function squireCreator() {
  let i = 0;
  while (i < 256) {
    const divContainer = document.getElementById("container");
    const divCreator = document.createElement("div");
    divCreator.setAttribute("class", "square");
    // divCreator.textContent = `${i}`;
    divContainer.appendChild(divCreator);
    i++;
  }
}

function draw(event) {
  const container = document.getElementById("container");
  const squares = container.getElementsByClassName("square");
  for (let square of squares) {
    if (square === event.target) {
      square.classList.add("black");
    }
  }
}

squireCreator();

const container = document.getElementById("container");
container.addEventListener("mouseover", draw);

const buttonSquarePromt = document.getElementById("squarePromt");

function squarePromt() {
  let numberOfSquares = prompt(
    "Enter number of squares per side for the new grid"
  );
  console.log(numberOfSquares);
}

buttonSquarePromt.addEventListener("click", () => {
  squarePromt();
});
