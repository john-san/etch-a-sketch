console.log("hello world");

// function to generate square
function createSquare() {
  const square = document.createElement('div');
  square.classList.add("square");
  return square;
}

function createRow(rowLength) {
  const row = document.createElement('div');
  row.classList.add("row");

  for (let i = 0; i < rowLength; i++) {
    const newSquare = createSquare();
    row.appendChild(newSquare);
  }

  return row;
}

// function to generate grid
// max should be 100
function validateGridSize(size) {
  if (size >=16 && size <= 100) {
    return size
  } else {
    return 16;
  }
}

function eraseGridColor() {
  const allSquares = [...document.querySelectorAll(".square")];
  allSquares.forEach((square) => {
    square.classList.remove("active");
  });
}

function deleteGrid() {
  const allRows = [...document.querySelectorAll("#mainContainer .row")];
  allRows.forEach((row) => {
    document.querySelector("#mainContainer").removeChild(row);
  });
}

function createGrid(size) {
  size = validateGridSize(size);

  for (let i = 0; i < size; i++) {
    const newRow = createRow(size);
    document.querySelector('#mainContainer').appendChild(newRow);
  }
  attachSquareEvents();
}

function attachSquareEvents() {
  const allSquares = [...document.querySelectorAll('.square')];

  for (let i=0; i < allSquares.length; i++) {
    allSquares[i].addEventListener('mouseenter', (e) => {
      console.log("entered");
      e.target.classList.add('active');
    });
  }
}

function newGrid() {
  deleteGrid();
  const size = prompt("Pick a grid size between 16 and 100.  Any attempts to troll will result in a 16x16 grid");
  createGrid(size);
}

document.querySelector("#clearBtn").addEventListener("click", eraseGridColor);
document.querySelector("#changeGridSizeBtn").addEventListener("click", newGrid);

// initialize Game
createGrid();
