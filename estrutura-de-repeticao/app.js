const listaArgumentos = (process.argv.slice(2));

console.log('---------------executando um for--------------------');

for(let controladorFor = 0; controladorFor < listaArgumentos.length; controladorFor++){
    console.log(`Posição ${controladorFor} valor lido = ${listaArgumentos[controladorFor]}`);
    
}
console.log('-----------------terminado--------------------------');



console.log('--------------executando um WHILE--------------------');

let controladorWhile = 0;
while(controladorWhile < listaArgumentos.length){
    console.log(`Posição ${controladorWhile} valor lido = ${listaArgumentos[controladorWhile]}`);
    controladorWhile++;
}

console.log('-----------------executando um DO WHILE-------------------');

/*let controladorDoWhile = 0;
do{
    console(`Posição ${controladorDoWhile} valor lido = ${listaArgumentos[controladorDoWhile]}`);
    controladorDoWhile++;
}while(controladorDoWhile < listaArgumentos.length);*/

console.log('---------------------executando um FOR OF--------------------');
for(const listaArgumentos of listaArgumentos){
    console.log(`valor lido = ${listaArgumentos}`);
}
