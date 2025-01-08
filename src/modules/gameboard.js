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
    return this.gameboard[x][y] !== 0; 
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

    for (let i = 0; i < ship.shipLength; i++) {
        if (this.isCellOccupied(x + i, y)) {
            console.log("Ein Schiff befindet sich bereits auf diesem Platz.");
            return false;
        }
    }

    for (let i = 0; i < ship.shipLength; i++) {
        this.gameboard[x + i][y] = ship.shipNumber;
    }
    this.ships.push(ship);
    console.log(`Schiff platziert: ${ship.name}`);
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
    for (const ship of this.ships) {
        let x, y, z;
        do {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
            z = 1;
        } while (!this.isPlacementValid(x, y, ship) || this.isCellOccupied(x, y));

        for (let i = 0; i < ship.shipLength; i++) {
            if (x + i > 9) {
                this.gameboard[x - z][y] = ship.shipNumber;
                z++;
            } else if (x + i < 9) {
                this.gameboard[x + i][y] = ship.shipNumber;
            } else {
                this.placeShipShape(ship, x, y);
            }
        }
    }
}


  //place the new shipforms
  placeShipShape(ship, x, y) {
    const shape = ship.shape;
    const coords = this.getShapeCoords(shape, ship.shipLength);

    for (const [dx, dy] of coords) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || nx >= 10 || ny < 0 || ny >= 10 || this.isCellOccupied(nx, ny)) {
        console.log("Schiff passt hier nicht hin");
        return;
      }
    }

    for (const [dx, dy] of coords) {
      const nx = x + dx;
      const ny = y + dy;
      this.gameboard[nx][ny] = ship.shipNumber;
    }

    this.ships.push(ship);
    console.log(`Schiff platziert: ${ship.name}`);
}

getShapeCoords(shape) {
    const shapes = {
      "line": [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]],
      "square": [[0, 0], [0, 1], [1, 0], [1, 1]],
      "L": [[0, 0], [1, 0], [2, 0], [2, 1]],
      "T": [[0, 1], [1, 0], [1, 1], [1, 2]],
      "dot": [[0, 0]]
    };
    return shapes[shape] || [];
}


  isPlacementValid(x, y, ship) {
    for (let i = 0; i < ship.shipLength; i++) {
      if (x + i > 9 || this.gameboard[x + i][y] !== 0) {
        return false;
      }
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
