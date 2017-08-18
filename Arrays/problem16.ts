
var arrNumbers:number[] = [1,2,3]
var n:number = 2
var indexOfNum:number = arrNumbers.indexOf(n)
arrNumbers.splice(indexOfNum, indexOfNum)

for(var x:number = 0; x < arrNumbers.length; x++){
 console.log(arrNumbers[x])
}


