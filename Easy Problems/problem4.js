
var readline = require('readline');

var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

rl.question("Enter the value of radius: ", function(radius) {
 pi = 3.14;
 dia = parseInt(radius) * parseInt(radius);
 area = pi * dia;
 cir = 2.0 * pi * radius;

 console.log("Diameter of the circle is " + dia);
 console.log("Area of the circle is " + area);
 console.log("Circumference of the circle is " + cir);
 rl.close();
});

