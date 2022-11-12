const readline = require("readline");

const rl =
 readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let timer = function (input) {
  
  let x = 0;
  if (input === 'b') {
    process.stdout.write('\x07');
  }
  if (!isNaN(input) && input > 0) {
    x = input*1000
    setTimeout(() => {
      process.stdout.write('\x07');
    }, x);
  }
}

rl.on('line', (input) => {
  timer(input);
  rl.close();
});

rl.on('SIGINT',(input) => {
  console.log("Thanks for using me, ciao!");
  rl.close();
});

