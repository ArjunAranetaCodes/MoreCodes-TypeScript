/*
Problem 14: Write a program to print the number pattern using loop.
1
22
333
4444
55555
*/
var y:number = 0;
var row:number = 5;
for(y = 0; y <= row; y++){
  var x:number = 0;
  for(x = 0; x < y; x++){
    process.stdout.write(y.toString());
  }
  process.stdout.write("\n");
}