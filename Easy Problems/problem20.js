
var word:string = "anna";
var tempWord:string = word.split('').reverse().join('');

if(word == tempWord){
 console.log("Palindrome");
}else{
 console.log("Not Palindrome");
}

