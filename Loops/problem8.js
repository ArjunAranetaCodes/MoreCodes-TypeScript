
var word:string = "program";
var vowels:string = "aeiou";
var vowelCount:number = 0;

for(var x:number = 0; x < word.length; x++){
 if(vowels.includes(word.charAt(x))){
  vowelCount += 1;
 }
}

console.log("Total: " + vowelCount.toString());

