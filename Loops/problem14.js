
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
 });
var sum:number = 0;
var ave:number = 0;
var x:number = 0;

var recursiveAsyncReadLine = function () {
 rl.question('Enter a number: ', function (num) {
  sum = parseInt(sum) + parseInt(num);
  if (x == 5){
   ave = sum / 5;
   console.log("Average: " + ave.toString());
   return rl.close();
  }
  recursiveAsyncReadLine();
 });
 x++;
};


recursiveAsyncReadLine();

