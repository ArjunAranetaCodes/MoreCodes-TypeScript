
var arrNumbers:number[] = [1,1,2,3]
var count:number = 0
for(var x:number = 0 ; x < arrNumbers.length; x++){
 if(arrNumbers[x] == 1){
  count = count + 1
 }
}
console.log("Occurence: " + count)


