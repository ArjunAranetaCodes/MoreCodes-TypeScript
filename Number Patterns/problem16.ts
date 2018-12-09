/*
Problem 16: Write a program to print the number pattern using loop.
12345
1234
123
12
1
*/
var y:number = 0;
var row:number = 5;
for(y = row; y > 0; y--){
 for(x = 0; x < y; x++){
  process.stdout.write((x + 1).toString());
 }
 process.stdout.write("\n");
}