let total_attempts = 25;
let score = 0;
let current_x = 4;
let current_y = 0;
let maze = [
  [" ", " ", "T", " ", "E"],
  [" ", " ", " ", "*", " "],
  [" ", " ", "T", "T", " "],
  ["*", " ", "*", " ", " "],
  ["S", " ", " ", " ", " "],
];

let direction = "";
function mazeGame() {
  for (let i = 0; i < total_attempts; i++) {
    direction = prompt("Enter direction to move: Up U,Down D,Left L, Right R");
    console.log(`You current position (${current_x},${current_y})`);
    validMove(maze, direction, current_x, current_y);
    maze[current_x][current_y] = "S";
    console.table(maze);
  }
}

function validMove(maze, direction, x, y) {
  let updated_x = 0;
  let updated_y = 0;

  if (direction == "U") {
    updated_x = x - 1;
    updated_y = y;
  } else if (direction == "D") {
    updated_x = x + 1;
    updated_y = y;
  } else if (direction == "L") {
    updated_x = x;
    updated_y = y - 1;
  } else if (direction == "R") {
    updated_x = x;
    updated_y = y + 1;
  }

  console.log(`x is ${updated_x}`);
  console.log(`y is ${updated_y}`);
  if (updated_x >= 0 && updated_x <= 4 && updated_y >= 0 && updated_y <= 4) {
    console.log("Valid move");
    //check if there is no obstacke
    if (maze[updated_x][updated_y] == "*") {
      console.log("You encountered an obstacle");
      //score = score - 1;
    }
    if (maze[updated_x][updated_y] == "T") {
      console.log("You Found Treasure");
      score = score + 1;
      current_x = updated_x;
      current_y = updated_y;
      maze[x][y] = " ";
    }
    if (maze[updated_x][updated_y] == " ") {
      console.log("You have moved");
      current_x = updated_x;
      current_y = updated_y;
      maze[x][y] = " ";
    }
    if (maze[updated_x][updated_y] == "E") {
      current_x = updated_x;
      current_y = updated_y;
      maze[x][y] = " ";
      console.log("Exit games");
      total_attempts = 10;
      console.log(`The game has ended`);
      console.log(`Your total score is ${score}`);
      //update the total number of attempts;
    }

    //update the current pos
  } else {
    console.log("Invalid  Move");
  }
}

mazeGame();
