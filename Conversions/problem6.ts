//Problem 6: Write a program that converts a binary number to decimal number.
var dec:number = 0;
var binary:string = "110";
binary = binary.split("").reverse();

for (var x = 0; x < binary.length; x++){
 if (binary[x] == '1'){
  dec = dec + parseInt(Math.pow(2, x));
 }
}

console.log(dec);
