const readLine = require('readline').createInterFace({
    input: process.stdin,
    output: process.stdout
});
//const minhaPrimeiraConstanteString = ('Minha primeira contante.');
//console.log(minhaPrimeiraConstanteString)

let leituraDeCamp;

readLine.question('Informe sua idade:', input => {
    leituraDeCamp = input;
    console.log(`O usuario digitou ${leituraDeCamp}`);
});