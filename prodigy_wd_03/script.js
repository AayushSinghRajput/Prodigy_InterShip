const gameBoard = document.getElementById("gameBoard");
const cells = document.querySelectorAll(".cell");
const gameStatus = document.getElementById("gameStatus");
const resetBtn = document.getElementById("resetBtn");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleClick(event) {
  const clickedCell = event.target;
  const clickedCellIndex = clickedCell.getAttribute("data-index");

  if (board[clickedCellIndex] !== "" || !isGameActive) {
    return;
  }

  updateCell(clickedCell, clickedCellIndex);
  checkForWinner();
}

function updateCell(cell, index) {
  board[index] = currentPlayer;
  cell.textContent = currentPlayer;
}

function checkForWinner() {
  let roundWon = false;

  for (let i = 0; i < winningConditions.length; i++) {
    const winCondition = winningConditions[i];
    const a = board[winCondition[0]];
    const b = board[winCondition[1]];
    const c = board[winCondition[2]];

    if (a === "" || b === "" || c === "") {
      continue;
    }

    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    gameStatus.textContent = `Player ${currentPlayer} has won!`;
    isGameActive = false;
    return;
  }

  if (!board.includes("")) {
    gameStatus.textContent = "Game is a draw!";
    isGameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  gameStatus.textContent = `Player ${currentPlayer}'s turn`;
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  isGameActive = true;
  currentPlayer = "X";
  gameStatus.textContent = `Player X's turn`;
  cells.forEach((cell) => (cell.textContent = ""));
}

cells.forEach((cell) => cell.addEventListener("click", handleClick));
resetBtn.addEventListener("click", resetGame);
