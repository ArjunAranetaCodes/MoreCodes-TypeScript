/*
Problem 17: Write a program to print the number pattern using loop.
1
12
123
1234
12345
1234
123
12
1
*/
var y:number = 0;
var row:number = 5;
for(y = 0; y <= row; y++){
  var x:number = 0;
  for(x = 0; x < y; x++){
    process.stdout.write((x + 1).toString());
  }
  process.stdout.write("\n");
}

for(y = row - 1; y > 0; y--){
  var x:number = 0;
  for(x = 0; x < y; x++){
    process.stdout.write((x + 1).toString());
  }
  process.stdout.write("\n");
}