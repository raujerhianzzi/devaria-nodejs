const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log('Esse programa vai checar se vc é maior de 18 anbos e tem habilitação e se vc pode entrar no kart.');
console.log ('Alem da suas verificações, precisamos verificar se vc esta na lista de presença do horáraio');

readLine.question('Qual é o ano do seu nascimento', ano =>{
    if(ano > 2004){
        console.log('Vc não tem 18 anos ');
    }
})