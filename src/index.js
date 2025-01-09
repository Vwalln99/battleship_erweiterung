import "./styles.scss";
import { Gameboard } from "./modules/gameboard";
import { Player } from "./modules/player";
import { Ship } from "./modules/ship";
import { Captain } from "./modules/captain";

let gameboardPlayer = new Gameboard();
let player = new Player("Viktoria");
let gameboardKI = new Gameboard();
//added captains and new logic for ing ships manually for player
let selectedCaptain = null;
let selectedShip = null;
let gameStarted = false;

document.getElementById("playerTitle").textContent = `${player.name}'s Spielfeld`;


gameboardPlayer.createGameboard();
gameboardKI.createGameboard();
gameboardKI.createShipsCPU();
gameboardKI.placeShipsCPU();

//create gameboard
generateBoard("playerBoard", gameboardPlayer, handlePlayerBoardClick);
generateBoard("cpuBoard", gameboardKI, handleCPUBoardClick);

//captain selection
document.getElementById("williamButton").addEventListener("click", () => selectCaptain("William"));
document.getElementById("giuseppeButton").addEventListener("click", () => selectCaptain("Giuseppe"));
document.getElementById("astridButton").addEventListener("click", () => selectCaptain("Astrid"));
document.getElementById("katrinButton").addEventListener("click", () => selectCaptain("Katrin"));

//ship selection 
document.getElementById("carrierButton").addEventListener("click", () => selectShip("carrier", 5));
document.getElementById("battleshipButton").addEventListener("click", () => selectShip("battleship", 4));
document.getElementById("cruiserButton").addEventListener("click", () => selectShip("cruiser", 3));
document.getElementById("submarineButton").addEventListener("click", () => selectShip("submarine", 3));
document.getElementById("destroyerButton").addEventListener("click", () => selectShip("destroyer", 2));
document.getElementById("dotButton").addEventListener("click", () => selectShip("dot", 1, "dot"));
document.getElementById("LButton").addEventListener("click", () => selectShip("L-Form", 3, "L"));
document.getElementById("TButton").addEventListener("click", () => selectShip("T-Form", 3, "T"));
document.getElementById("SButton").addEventListener("click", () => selectShip("Square-Form", 4, "square"));

//new function select captain
function selectCaptain(captainName) {
    selectedCaptain = new Captain(captainName);
    console.log(`Kapitan ausgewählt: ${captainName}`);
    return selectedCaptain;
  }
  //new function add ships
  function selectShip(name, length, shape) {
    selectedShip = new Ship(name, length, Math.random().toString(36).substring(2), shape);
    console.log(`Schiff ausgewählt: ${name} mit Länge ${length} und Form ${shape}`);
    return selectedShip;
  }  

  
/*const carrier = new Ship("carrier", 5, 5);
const battleship = new Ship("battleship", 4, 4);
const cruiser = new Ship("cruiser", 3, 3);
const submarine = new Ship("submarine", 3, 2);
const destroyer = new Ship("Destroyer", 2, 1);
const line = new Ship("line", 5, "line");
const square = new Ship("square", 4, "square");
const lform = new Ship("lform", 3, "L");
const tform = new Ship("tform", 3, "T");
const dot = new Ship("dot", 2, "dot");*/

function generateBoard(boardId, gameboard) {
    const boardDiv = document.getElementById(boardId);
    boardDiv.innerHTML = "";
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        if (boardId === "playerBoard") {
            cell.addEventListener("click", () => handlePlayerBoardClick(i, j, gameboard, boardDiv));
          } else if (boardId === "cpuBoard") {
            cell.addEventListener("click", () => handleCPUBoardClick(i, j, gameboard, boardDiv));
          }
          
        boardDiv.appendChild(cell);
      }
    }
  }
  
  //player board click handler
  function handlePlayerBoardClick(x, y, gameboard, boardDiv){
    
    //console.log(selectShip());
    if(selectedShip && !gameStarted){
        if(gameboard.placeShip(selectedShip, x, y)){

            console.log(`Schiff platziert: ${selectShip.name} auf ${x}, ${y}`);
            updateBoard(boardDiv, gameboard);
        }
    }else{
        alert("Fehler bei der Platzierung des Schiffes!")
    }
    console.log(gameboard);
  }


  // KI click handler
function handleCPUBoardClick(x, y, gameboard, boardDiv) {
  if (gameStarted && !gameboard.isCellAttacked(x, y)) {
    const hit = gameboard.receiveAttack(x, y);
    boardDiv.children[x * 10 + y].style.backgroundColor = hit ? "red" : "blue";
    console.log(hit ? `Treffer auf (${x}, ${y})!` : `Verfehlt auf (${x}, ${y}).`);
    //updateBoard(boardDiv, gameboard);

    if (gameboard.allShipsSunk()) {
      alert("Du hast gewonnen!");
      return;
    }

    
    performCPUAttack();
  }
}


// UI aktualisieren

function updateBoard(boardDiv, gameboard) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const cell = boardDiv.children[i * 10 + j];
        if (gameboard.isCellOccupied(i, j)) {

          if (gameboard.gameboard[i][j] !== 0 && gameboard.gameboard[i][j] !== "Treffer" && gameboard.gameboard[i][j] !== "X") {
            cell.style.backgroundColor = "green";
          }
        } else {
          cell.style.backgroundColor = "black";
        }
      }
    }
  }
  

// KI angriff
function performCPUAttack() {
  let x, y;
  do {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
  } while (gameboardPlayer.isCellAttacked(x, y));

  const hit = gameboardPlayer.receiveAttack(x, y);
  const boardDiv = document.getElementById("playerBoard");
  boardDiv.children[x * 10 + y].style.backgroundColor = hit ? "red" : "blue";

  console.log(hit ? `KI trifft auf (${x}, ${y})!` : `KI verfehlt auf (${x}, ${y}).`);

  if (gameboardPlayer.allShipsSunk()) {
    alert("Die KI hat gewonnen!");
  }
}

// Spiel starten
function startGame() {
  if (gameboardPlayer.ships.length >= 10) {
    gameStarted = true;
 alert("Spiel startet!");
  } else {
    alert("Platziere zuerst alle Schiffe.");
  }
}

document.getElementById("startGameButton").addEventListener("click", startGame);

