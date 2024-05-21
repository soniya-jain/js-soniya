const accountId = 144553
let accountEmail = "soniya@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// there are some const keywords in JavaScript 
// for example console.log means print this or output this on the screen 

accountEmail = "sj@sj.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword], accountCity)

console.log(accountId);

// what is the difference between let and var 
// to declare a constant in javascript you have to use const word only 
// to declare a variable in javascript we have different different methods like using let keyword, var keyword or without using any keword just directly assign the value to the variable name
// these curly braces are known as scope 
/* Prefer not to use var 
   because of issue in block scope and functional scope 
*/