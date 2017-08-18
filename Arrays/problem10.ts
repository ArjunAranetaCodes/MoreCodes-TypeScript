
var arrNumbers:number[] = [1,2,3]
var sum:number = 0
var ave:number = 0

for(var x:number = 0; x < arrNumbers.length; x++){
 sum = sum + arrNumbers[x]
}

ave = sum / 5

console.log("Average is " + ave)


