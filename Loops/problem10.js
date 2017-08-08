
var num:number = 371;
var sum:number = 0;
var temp:number = 0;
var rmdr:number = 0;

temp = num;

while (temp != 0){
 rmdr = parseInt(temp % 10);
 sum = sum + (rmdr * rmdr * rmdr);
 temp = parseInt(temp / 10);
}

if (num == sum){
 console.log("Armstrong number");
}else {
 console.log("Not an Armstrong number");
}

