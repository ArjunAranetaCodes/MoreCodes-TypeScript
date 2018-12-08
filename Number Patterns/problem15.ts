/*
Problem 15: Write a program to print the number pattern using loop.
11111
2222
333
44
5
*/
var y:number = 0;
var row:number = 5;
var num:number = 1;
for(y = row; y > 0; y--){
  for(x = 0; x < y; x++){
    process.stdout.write(num.toString());
  }
  num = num + 1;
  process.stdout.write("\n");
}