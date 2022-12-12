const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log('Esse programa vai checar se vc é maior de 18 anbos e tem habilitação e se vc pode entrar no kart.');
console.log ('Alem da suas verificações, precisamos verificar se vc esta na lista de presença do horáraio');

readLine.question('Qual é o ano do seu nascimento? ', ano =>{
    if(ano > 2004){
        console.log('Vc não tem 18 anos ');
       
    }else{
        readLine.question("Vc tem habilitção ? (sim/não) ", temhabilitacao => {
            if(!(temhabilitacao.toUpperCase() === "SIM")){
                console.log('Vc não tem habilitação para entrar no kart.');
            }else{
                readLine.question("Qual seu nome? ", nome =>{
                    switch(nome){
                        case 'Douglas':
                            console.log('Bem vindo ao kart Douglas');
                            break;
                        case 'Rauje':
                                console.log('Bem vindo ao kart Rauje');
                                break
                        default:
                            console.log('Seu nome não foi identificado na lista de presença.');
                           

                    }
                });
            }
            
        })
    }
})