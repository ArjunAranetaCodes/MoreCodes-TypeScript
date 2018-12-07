/*
Problem 9: Write a program to print the number pattern of ones and zeros using loop.
11011
11011
00000
11011
11011
*/
var y:number = 0;
var row:number = 5;
var col:number = 5;
for(y = 0; y < row; y++){
 for(x = 0; x < col; x++){
  if(col / 2 == x || row / 2 == y){
   process.stdout.write("0");
  }else if((col % 2 == 0 && (col / 2) == x) || (row % 2 == 0 && (row / 2) == y)){
   process.stdout.write("0");
  }else{
   process.stdout.write("1");
  }		
 }
 process.stdout.write("\n");
}