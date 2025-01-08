class Captain {
    constructor(name, ability) {
      this.name = name;
      this.ability = ability;
    }
  
    useAbility(gameboard, x, y) {
      if (this.name === "William") {
        this.destroyLine(gameboard, x);
      } else if (this.name === "Giuseppe") {
        this.destroyRandom(gameboard);
      } else if (this.name === "Astrid") {
        this.destroyArea(gameboard, x, y);
      } else if (this.name === "Katrin") {
        this.destroyNearby(gameboard, x, y);
      }
    }
  
    destroyLine(gameboard, x) {
      for (let i = 0; i < 10; i++) {
        if (gameboard[x][i] !== 0 && gameboard[x][i] !== "X") {
          gameboard[x][i] = "X";
          break;
        }
      }
    }
  
    destroyRandom(gameboard) {
      let targets = [];
      for (let i = 0; i < 9; i++) {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        if (gameboard[x][y] !== "X") {
          targets.push([x, y]);
        }
      }
      targets.forEach(([x, y]) => {
        gameboard[x][y] = "X";
      });
    }
  
    destroyArea(gameboard, x, y) {
      for (let i = x - 1; i <= x + 1; i++) {
        for (let j = y - 1; j <= y + 1; j++) {
          if (i >= 0 && i < 10 && j >= 0 && j < 10 && gameboard[i][j] !== "X") {
            gameboard[i][j] = "X";
          }
        }
      }
    }
  
    destroyNearby(gameboard, x, y) {
      const offsets = [
        [-1, 0], [1, 0], [0, -1], [0, 1],
        [-1, -1], [1, 1]
      ];
      offsets.forEach(([dx, dy]) => {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10 && gameboard[nx][ny] !== "X") {
          gameboard[nx][ny] = "X";
        }
      });
    }
  }
  
  export { Captain };
  