const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
    
});

const validarnumeroinformado = (numero) => {
   const resultado = Number.parseFloat(numero);
   if(!resultado){
        console.log('Numero informado não é válido');
   }
   return resultado;
}

const validaroperador = (operador) => {
    switch(operador){
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operador;
        default:
            console.log('Operador informado é válido');
            return null;

    }
}

readline.question('Favor informar um número:', (numero1) => {
  const numerovalidado1 = validarnumeroinformado(numero1);

  if(numerovalidado1){
    readline.question('Favor informar outro número:', (numero2) =>{
        const numerovalidado2 = validarnumeroinformado(numero2);

        if(numerovalidado2){
            readline.question('Favor informar o operador:', (operador) => {
                const operadorvalidado = validaroperador(operador);
                if(operadorvalidado){
                    switch(operadorvalidado){
                        case '+': console.log(`Operador selecionado "Adição" resultado ${numerovalidado1} + ${numerovalidado2} = ${numerovalidado1 + numerovalidado2}`);
                            break;
                        case '-': console.log(`Operador selecionado "subtração" resultado ${numerovalidado1} - ${numerovalidado2} = ${numerovalidado1 - numerovalidado2}`);
                            break;
                        case '/': console.log(`Operador selecionado "divisão" resultado ${numerovalidado1} / ${numerovalidado2} = ${numerovalidado1 / numerovalidado2}`);
                            break;
                        case '*': console.log(`Operador selecionado "Multiplicação" resultado ${numerovalidado1} * ${numerovalidado2} = ${numerovalidado1 * numerovalidado2}`);
                            break;
                        case '%': console.log(`Operador selecionado "modulo" resultado ${numerovalidado1} % ${numerovalidado2} = ${numerovalidado1 % numerovalidado2}`);
                            break;
                        default: break;
                    }
                }
            });
        }
    });
  }
   
})