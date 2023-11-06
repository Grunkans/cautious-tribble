import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

function getQuestion() {
  const rl = readline.createInterface({ input, output });
  return [rl.question.bind(rl), rl.close.bind(rl)];
}

const [question, close] = getQuestion();
let answer = await question("What do you think of Node.js? ");
console.log(`Thank you for your valuable feedback: ${answer}`);
close();
