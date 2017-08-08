
var word:string = "MoreCodes";
var newWord:string = "";
for (var x:number = word.length - 1; x >= 0; x--) {
 newWord = newWord + word.charAt(x);
}
console.log(newWord);

