/*
Problem 19: Write a program to print the number pattern using loop.
11 11
11 11
   
11 11
11 11
*/
var y:number = 0;
var row:number = 5;
var col:number = 5;
for(y = 1; y <= row; y++){
  var x:number = 0;
  for(x = 1; x <= col; x++){
    if((col / 2).toFixed(0) == x || (row / 2).toFixed(0) == y){
      process.stdout.write(" ");
    }else if(((col % 2).toFixed(0) == 0 && (col / 2).toFixed(0) == x) || 
     ((row % 2).toFixed(0) && (row / 2).toFixed(0) == y)){
     process.stdout.write(" ");
    }else{
     process.stdout.write("1");
    }		
  }
 process.stdout.write("\n");
}