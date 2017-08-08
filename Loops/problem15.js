
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
 });

var recursiveAsyncReadLine = function () {
 rl.question('Enter a number: ', function (num) {
  if (num < 0){
   console.log("Terminated");
   return rl.close();
  }
  recursiveAsyncReadLine();
 });
};

recursiveAsyncReadLine();

