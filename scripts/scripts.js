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
function createGrid(size) {
  if (size == null) {
    size = 16;
  }

  for (let i = 0; i < size; i++) {
    const newRow = createRow(size);
    document.querySelector('#mainContainer').appendChild(newRow);
  }
}

createGrid();
