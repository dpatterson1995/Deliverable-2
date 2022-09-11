const name = prompt("Welcome to GC mini golf! What is your name?");
console.log(`Your name: ${name}`);

let score = 0;
let par = 0;

const numberOfHoles = prompt(
  `Hi, ${name}! Would you like to play 3 or 6 holes?`
);
console.log(`Number of holes: ${numberOfHoles}`);

if (numberOfHoles === "3") {
  for (let i = 1; i <= 3; i++) {
    score += parseInt(prompt(`How many putts for hole ${i}?`));
  }
  par = 9;
  console.log(score);

  if (score === par) {
    console.log(`Good game, ${name}. Your total par was 0`);
  }
  if (score > par) {
    console.log(`Nice try, ${name}... Your total par was: + ${score - par}`);
  }
  if (score < par) {
    console.log(`Great job, ${name}! Your total par was: -${par - score}`);
  }
} else if (numberOfHoles === "6") {
  for (let i = 1; i <= 6; i++) {
    score += parseInt(prompt(`How many putts for hole ${i}?`));
  }
  par = 18;
  console.log(score);

  if (score === par) {
    console.log(`Good game, ${name}. Your total par was 0`);
  }
  if (score > par) {
    console.log(`Nice try, ${name}... Your total par was: + ${score - par}`);
  }
  if (score < par) {
    console.log(`Great job, ${name}! Your total par was: -${par - score}`);
  }
} else {
  console.log(`Sorry, ${numberOfHoles} is an invalid option!`);
}
