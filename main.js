
//imports te modules.
let sat_solver = require('sat_solver');
let readline = require('readline-sync');

//asks the user what's the file name.
let fileName = readline.question("What's the file name?");

//starts counting runtime
console.time('runtime');

let result = sat_solver.solve(fileName + '.cnf');

console.timeEnd('runtime');

console.log(result);
