import { getQuestion } from "./readline.js";
const [question, close] = getQuestion();

let input = "";
while (input < 7) {
  console.log();
  console.log("Huvudmeny. Välj ett alternativ:");
  console.log("1. Figur 1");
  console.log("2. Figur 2");
  console.log("3. Figur 3");
  console.log("4. Figur 4");
  console.log("5. Figur 5");
  console.log("6. Figur 6");
  console.log("Q. Avsluta");
  input = await question("> ");
  input = input.toLowerCase();

  if (input == "1-6") {
  } else if (input === "1") {
    figur1();
  } else if (input === "2") {
    figur2();
  } else if (input === "3") {
    figur3();
  } else if (input === "4") {
    figur4();
  } else if (input === "5") {
    figur5();
  } else if (input === "6") {
    figur6();
  } else {
    console.log("Avslutar...");
  }
}

function figur1() {
  console.log("Visar figur 1:");
  for (let i = 1; i <= 6; i++) {
    let text = "";
    for (let j = 1; j <= 8; j++) {
      if (j === 1) {
        text = text + "#";
      } else {
        text = text + ".";
      }
    }
    console.log(text);
  }
}
function figur2() {
  console.log("Visar figur 2:");
  for (let i = 1; i <= 6; i++) {
    let text = "";
    for (let j = 1; j <= 7; j++) {
      if (j === i) {
        text = text + "#";
      } else {
        text = text + ".";
      }
    }
    console.log(text);
  }
}
function figur3() {
  console.log("Visar figur 3:");
  for (let i = 1; i <= 6; i++) {
    let text = "";
    for (let j = 1; j <= 7; j++) {
      if (j === 3 || j === 4 || j === 5) {
        text = text + "#";
      } else {
        text = text + ".";
      }
    }
    console.log(text);
  }
}
function figur4() {
  console.log("Visar figur 4:");
  for (let i = 1; i <= 6; i++) {
    let text = "";
    for (let j = 1; j <= 8; j++) {
      if (j === 3 || i === 3) {
        text = text + "#";
      } else {
        text = text + ".";
      }
    }
    console.log(text);
  }
}
function figur5() {
  console.log("Visar figur 5:");
  for (let i = 1; i <= 6; i++) {
    let text = "";
    for (let j = 1; j <= 8; j++) {
      let k = i + j;
      if (j === 5) {
        text = text + "#";
      } else if (k === 7) {
        text = text + "#";
      } else {
        text = text + ".";
      }
    }
    console.log(text);
  }
}
function figur6() {
  console.log("Visar figur 6:");
  for (let i = 1; i <= 6; i++) {
    let text = "";
    for (let j = 1; j <= 8; j++) {
      let k = i + j;
      if (j === i) {
        text = text + "#";
      } else if (k === 7) {
        text = text + "#";
      } else {
        text = text + ".";
      }
    }
    console.log(text);
  }
}
close();
