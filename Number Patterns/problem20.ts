/*
Problem 20: Write a program to print the number pattern using loop.
  1
 222
33333
 444
  5
*/

var y:number = 0;
var x:number = 0;
var rows:number = 3;
var stars:number = 1; 
var blank:number = rows - 1;

for(y=1; y<rows*2; y++){
  for(x=1; x<=blank; x++){
    process.stdout.write(" ");
  }

  for(x=1; x<stars*2; x++){
    process.stdout.write(y.toString());
  }

  process.stdout.write("\n");

  if(y<rows){
    blank--;
    stars++;
  }else{
    blank++;
    stars--;
  }
}