let attempts = 10;
let startNumber = 0;
let endNumber = 100;
let random_number = 0;

// I haven't implemented
//providing hints to the users

function game() {
  let rounds = 3;

  for (let j = 0; j < rounds; j++) {
    let play = prompt("To Play p: To Quit Q");
    play.toLocaleLowerCase();
    console.log(`play value is ${play}`);

    if (play == "P") {
      console.log("Playing Game!!!");
      let game_level = prompt("Game Level:  Easy E, Medium M, Difficult D");
      if (game_level == "E") {
        attempts = 10;
        random_number = Math.random() * 10;
        random_number = Math.floor(random_number);
        console.log(random_number);
      } else if (game_level == "M") {
        attempts = 8;
        random_number = Math.random() * 20;
        random_number = Math.floor(random_number);
        console.log(random_number);
      } else if (game_level == "D") {
        attempts = 5;
        random_number = Math.random() * 100;
        random_number = Math.floor(random_number);
        console.log(random_number);
      } else {
        attempts = 3;
      }
      guessingNumber(random_number);
    }
    if (play == "Q") {
      console.log("Quitting Game !!!");
      break;
    }
  }
}

function guessingNumber(random_number) {
  for (let i = 0; i < attempts; i++) {
    let guess = prompt("Guess the random number");
    if (guess == random_number) {
      console.log(`It took you ${i + 1} guess to reach the final output`);
      console.log("Correct!");
      console.log("You won");
      return;
    } else if (guess < random_number) {
      console.log("Too Low!");
    } else if (guess > random_number) {
      console.log("Too High!");
    }
  }
}
