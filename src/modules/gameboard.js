"use strict";

import { Ship } from "./ship";

class Gameboard {
  constructor() {
    this.gameboard = [];
    this.ships = [];
    this.counter = 0;
    //added more functionality
    this.attackedCells = [];
  }

//validation if cell is already occupied
isCellOccupied(x, y) {
  return this.gameboard[x][y] !== null && this.gameboard[x][y] !== undefined;
}


  //validation attack
  isCellAttacked(x, y) {
    return this.attackedCells.some(cell => cell.x === x && cell.y === y);
  }

  receiveAttack(x, y) {
   
    if (this.isCellAttacked(x, y)) {
      console.log("Bereits angegriffen.");
      return false;
    }

    this.attackedCells.push({ x, y });

    if (this.gameboard[x][y] !== 0) {
      console.log("Treffer!");
      return true;
    } else {
      console.log("Verfehlt!");
      return false;
    }
  }

  allShipsSunk() {
    return this.ships.every(ship => ship.isSunk);
  }


  createGameboard() {
    for (let i = 0; i < 10; i++) {
      let innerArray = [];
      this.gameboard.push(innerArray);
      for (let z = 0; z < 10; z++) {
        innerArray.push(0);
      }
    }
  }

  //modified placeShip for better logic and less code repetition
  placeShip(ship, x, y) {
    if (!this.isPlacementValid(x, y, ship)) {
      console.log("Platziere dein Schiff bitte woanders");
      return false;
    }
  
    console.log(`Placing ship: ${ship.name} at position (${x}, ${y})`);
  
    if (ship.shape !== "line") {
      this.placeShipShape(ship, x, y); // Spezialformen platzieren
    } else {
      for (let i = 0; i < ship.length; i++) {
        if (x + i > 9) {
          console.log("Ship goes out of bounds horizontally.");
          return false;
        }
        this.gameboard[x + i][y] = ship.shipNumber;
      }
    }
  
    this.ships.push(ship);
    console.log(`Ship ${ship.name} placed successfully at (${x}, ${y})`);
    return true;
  }
  
 


  createShipsCPU() {
    const carrier = new Ship("carrier", 5, 5, "line");
    const battleship = new Ship("battleship", 4, 4, "line");
    const cruiser = new Ship("cruiser", 3, 3, "line");
    const submarine = new Ship("submarine", 3, 2, "line");
    const destroyer = new Ship("Destroyer", 2, 1, "line");
    const line = new Ship("line", 5, "line");
    const square = new Ship("square", 4, "square");
    const lform = new Ship("lform", 3, "L");
    const tform = new Ship("tform", 3, "T");
    const dot = new Ship("dot", 2, "dot");
    this.ships.push(carrier, battleship, cruiser, submarine, destroyer, line, square, lform, tform, dot);
  }

//modified code for less code repetition and functionality
placeShipsCPU() {
  const shipShapes = ["line", "square", "L", "T", "dot"];
  const shipLengths = { line: 5, square: 4, L: 3, T: 3, dot: 1 };
  let shipCount = 0;

  while (shipCount < 10) {
    let shipShape = shipShapes[Math.floor(Math.random() * shipShapes.length)];
    let shipLength = shipLengths[shipShape];
    let ship = new Ship(
      `Ship${shipCount + 1}`,
      shipLength,
      Math.random().toString(36).substring(2),
      shipShape
    );

    let x, y, attempts = 0, maxAttempts = 1000;

    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
      attempts++;
      if (attempts >= maxAttempts) {
        console.error(`Keine gültige Position für ${ship.name} gefunden.`);
        return;
      }
    } while (
      !this.isPlacementValid(x, y, ship) && 
      !this.isCellOccupied(x, y)
    );

    this.placeShipShape(ship, x, y); 
    console.log(`CPU-Schiff ${ship.name} platziert: ${ship.shipNumber} bei (${x}, ${y})`);
    this.ships.push(ship);
    shipCount++;
    console.log(this.gameboard);
  }
}





  //place the new shipforms
  placeShipShape(ship, x, y) {
    const shape = ship.shape;

    switch (shape) {
      case "line":
        for (let i = 0; i < ship.length; i++) {
          if (x + i < 10) this.gameboard[x + i][y] = ship.shipNumber;
        }
        break;

      case "square":
        for (let i = 0; i < 2; i++) {
          for (let j = 0; j < 2; j++) {
            if (x + i < 10 && y + j < 10) this.gameboard[x + i][y + j] = ship.shipNumber;
          }
        }
        break;

      case "L":
        for (let i = 0; i < ship.length; i++) {
          if (i < ship.length - 1) {
            if (x + i < 10) this.gameboard[x + i][y] = ship.shipNumber;
          } else {
            if (x + i - 1 < 10 && y + 1 < 10) this.gameboard[x + i - 1][y + 1] = ship.shipNumber;
          }
        }
        break;

      case "T":
        for (let i = 0; i < 3; i++) {
          if (x < 10 && y - 1 + i < 10) this.gameboard[x][y - 1 + i] = ship.shipNumber;
        }
        if (x + 1 < 10) this.gameboard[x + 1][y] = ship.shipNumber;
        break;

      case "dot":
        if (x < 10 && y < 10) this.gameboard[x][y] = ship.shipNumber;
        break;
    }
  }

  isPlacementValid(x, y, ship) {
    const shape = ship.shape;

    switch (shape) {
      case "line":
        for (let i = 0; i < ship.length; i++) {
          if (x + i >= 10 || this.gameboard[x + i][y] !== 0) return false;
        }
        break;

      case "square":
        for (let i = 0; i < 2; i++) {
          for (let j = 0; j < 2; j++) {
            if (x + i >= 10 || y + j >= 10 || this.gameboard[x + i][y + j] !== 0) return false;
          }
        }
        break;

      case "L":
        for (let i = 0; i < ship.length; i++) {
          if (i < ship.length - 1) {
            if (x + i >= 10 || this.gameboard[x + i][y] !== 0) return false;
          } else {
            if (x + i - 1 >= 10 || y + 1 >= 10 || this.gameboard[x + i - 1][y + 1] !== 0) return false;
          }
        }
        break;

      case "T":
        for (let i = 0; i < 3; i++) {
          if (x >= 10 || y - 1 + i >= 10 || this.gameboard[x][y - 1 + i] !== 0) return false;
        }
        if (x + 1 >= 10 || this.gameboard[x + 1][y] !== 0) return false;
        break;

      case "dot":
        if (x >= 10 || y >= 10 || this.gameboard[x][y] !== 0) return false;
        break;
    }

    return true;
  }


  attackShip(x, y) {
    const currentItem = this.gameboard[x][y];
    const ship = this.ships.find((ship) => ship.shipNumber === currentItem);
    if (ship) {
      ship.timesHit++;
      this.gameboard[x][y] = "Treffer";
      if (ship.timesHit === ship.shipLength) {
        ship.isSunk = true;
        console.log(`Du hast ${ship.name} versenkt!`);
        return "Versenkt";
      } else {
        console.log("Treffer!");
        return "Treffer";
      }
    } else {
      console.log("Verfehlt!");
      this.gameboard[x][y] = "X";
      return "Verfehlt";
    }
  }

  placeCustomShip(ship, shape, x, y) {
    const shapes = {
      "line": [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]],
      "square": [[0, 0], [0, 1], [1, 0], [1, 1]],
      "L": [[0, 0], [1, 0], [2, 0], [2, 1]],
      "T": [[0, 1], [1, 0], [1, 1], [1, 2]],
      "dot": [[0, 0]]
    };
    const coords = shapes[shape];
    if (!coords) {
      console.log("Ungültige Form");
      return;
    }

    coords.forEach(([dx, dy]) => {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10) {
        this.gameboard[nx][ny] = ship.shipNumber;
      }
    });
    this.ships.push(ship);
  }
}

export { Gameboard };
