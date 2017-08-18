
var arrNumbers:number[] = [1,3,2,4]
var closest:number = 0
var numDiff:number = Math.max(...arrNumbers)

for(var x:number = 0; x < arrNumbers.length; x++){
 var diff:number = 0 - arrNumbers[x]
 diff = Math.abs(diff)
 if (diff < numDiff){
  numDiff = diff
  closest = arrNumbers[x]
 }
}

console.log("Closest to zero is " + closest)


