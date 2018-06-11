console.log('(Type "exit" to exit)')
console.log('\nTrivial SAT Solver\nMade by Tiago Moraes & Matheus Belfort');
console.log('-------------------------------------------------------');

var exit = false;

while (!exit == true) {

    //imports te modules.
    let sat_solver = require('sat_solver');
    let readline = require('readline-sync');
    
    //asks the user what's the file name.
    let fileName = readline.question("What's the file name?\n");
    console.log('\033c');
    
    if (fileName != 'exit') {      
        console.log('-------------------------------------------------------')

        //starts counting runtime
        console.time('runtime');

        let result = sat_solver.solve(fileName);
        if (result.isSat == true) {
            console.log('É SAT!');
            console.log('Uma solução é: [' + result.satisfyingAssignment + ']');
        } else {
            console.log('NÃO É SAT :(')
        }
        console.timeEnd('runtime');
        console.log('-------------------------------------------------------\n\n\n\n')
        console.log('Test again:');

    } else {
        exit = true;
    }
}
