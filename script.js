let score = 0;
const total_questions = 4;

const questions = [
  "Question: 2 + 2 = ? ",
  "Question: 2 + 10 = ? ",
  "Question: 2 + 8 = ? ",
  "Question: 2 + 7 = ?",
];

const answer = ["4", "12", "10", "9"];

console.log("Welcome to the Quiz");
for (let i = 0; i < total_questions; i++) {
  let prompt_answer = prompt(questions[i]);

  if (prompt_answer == answer[i]) {
    console.log("This is correct answer");
    score = score + 1;
    console.log(`Current score is ${score}`);
  } else {
    console.log("The answer is incorrect");
    score = score - 2;
    console.log(`Current score is ${score}`);
  }
}

console.log(`Your Final Game score is: ${score}`);
