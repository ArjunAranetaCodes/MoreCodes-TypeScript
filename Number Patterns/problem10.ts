/*
Problem 10: Write a program to print the number pattern using loop.
12345
23456
34567
45678
56789
*/
var y:number = 0;
var row:number = 5;
var col:number = 5;
var min:number = 1;
for(y = 0; y < row; y++){
 var x:number = 0;
 num = min + y;
 for(x = 0; x < col; x++){
  process.stdout.write(num.toString());
  num = num + 1;
 }
 console.log();
}