/*
Problem 12: Write a program to print the pattern of asterisks using loop.
*****
****
***
**
*
*/
var y:number = 0;
var row:number = 5;
for(y = row; y > 0; y--){
 var x:number = 0; 
 for(x = 0; x < y; x++){
  process.stdout.write("*");
 }
 process.stdout.write("\n");
}