import chalk from 'chalk';
import readlineSync from 'readline-sync';


const nomeCliente = readlineSync.question(chalk.underline("digite seu nome: "));
    const respostas = readlineSync.question("Bom te ver denovo " + chalk.green(nomeCliente) 
     + ", em que posso ajudar ?, basta digitar uma das opcoes:" /n "1.Fatura, 2.Problemas na linha, 3.Conexao ruim.  "
     + "Basta digitar o numero e o resto e com agente:");

        function resultado(numero){
            if(numero === "1"){
                return chalk.green(nomeCliente)
                + " Aqui esta sua fatura, Finge que tem uma fatura ai kk.";
            }
            if(numero === "2"){
                return chalk.green(nomeCliente) 
                + " Aguarde que ligaremos para agendar uma visita"
            }
            if(numero === "3"){
                return chalk.green(nomeCliente) 
                + " So lamento";
            }
            else{
                return "Voce ta vendo essa opcao ai em cima ?, ta maluco rapaiz...";
            }
        }
const seleciona = resultado(respostas);
console.log(seleciona);
