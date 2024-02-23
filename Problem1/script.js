// In a parallel universe, there exists a time machine that can only travel to different
// years within the 21st century. The time machine operates on JavaScript fuel, a
// unique type of fuel that is generated from JavaScript code.
// Your task is to write a JavaScript function timeTravel(year, month, day) that
// simulates a journey in this time machine.
// Function Input
//  year: A four-digit integer representing the year (2000 to 2099).
//  month: An integer (1 to 12) representing the month.
//  day: An integer (1 to 31) representing the day.
// Function Output The function should return a string in the format: “The time
// machine has travelled to {day}-{month}-{year}”.
// Constraints
//  The function should validate the input and handle incorrect or impossible
// dates (e.g., February 30). In such cases, the function should return: “Invalid
// date. Please try again.”
//  The function should not use any external libraries.
// Evaluation Submissions will be evaluated based on the correctness of the output,
// the handling of edge cases, and the simplicity and readability of the code.

function timeTravel(year, month, day) {
  //to check a year
  // is valid mod operator is used
  // I haven't implemented it

  if (!(month >= 1 && month <= 12)) {
    console.log("Invalid Month");
  }

  switch (month) {
    case 1:
    case 4:
    case 6:
    case 8:
    case 10:
    case 12:
      if (day >= 1 && day <= 31) {
        console.log(
          `The time machine has travelled to ${day}--${month}--${year}.`
        );
      } else {
        console.log("Invalid day");
      }
      break;

    case 2:
      if (day >= 1 && day <= 29) {
        console.log(`Correct Value`);
      } else {
        console.log("Invalid day");
      }
      break;

    case 3:
    case 5:
    case 7:
    case 9:
    case 11:
      if (day >= 1 && day <= 30) {
        console.log(`Correct Value`);
      } else {
        console.log("Invalid day");
      }
      break;
  }
}

timeTravel(2000, 5, 31);
