import "./styles.scss";
import { Gameboard } from "./modules/gameboard";
import { Player } from "./modules/player";
import { Ship } from "./modules/ship";
import { Captain } from "./modules/captain";

let gameboardPlayer = new Gameboard();
let player = new Player("Viktoria");
let gameboardKI = new Gameboard();
//added captains and new logic for placing ships manually for player
let selectedCaptain = null;
let selectedShip = null;

gameboardPlayer.createGameboard();
gameboardKI.createGameboard();
gameboardKI.createShipsCPU();

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
document.getElementById("IButton").addEventListener("click", () => selectShip("I-Form", 4, "I"));

//new function select captain
function selectCaptain(captainName) {
    selectedCaptain = new Captain(captainName, captainName);
    console.log(`Kapitan ausgewählt: ${captainName}`);
  }
  //new function add ships
  function selectShip(name, length, shape) {
    selectedShip = new Ship(name, length, Math.random().toString(36).substring(2), shape);
    console.log(`Schiff ausgewählt: ${name} mit Länge ${length} und Form ${shape}`);
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
        cell.addEventListener("click", () => handleCellClick(i, j, gameboard));
        boardDiv.appendChild(cell);
      }
    }
  }
  
  generateBoard("playerBoard", gameboardPlayer);
  generateBoard("cpuBoard",gameboardKI);
  
  function handleCellClick(x, y, gameboard) {
    if (selectedShip) {
      // Place the ship on the player's gameboard
      if (gameboard.placeShip(selectedShip, x, y)) {
        console.log(`Schiff platziert: ${selectedShip.name} auf (${x}, ${y})`);
      }
    }
  }

gameboardKI.placeShipsCPU();


