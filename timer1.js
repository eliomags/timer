let timer = function (input) {
  let x = 0;
  if (!isNaN(input) && input > 0) {
    x = input*1000
    setTimeout(() => {
      process.stdout.write('\x07');
    }, x);
  }
}
const array = process.argv.slice(2);
// process.argv.slice(2).sort((a, b) => a-b);
for (let item of array) {
  timer(item);
}; 
