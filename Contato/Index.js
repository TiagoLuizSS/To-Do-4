import chalk from 'chalk';
import readlineSync from 'readline-sync';



    const nomeCliente = readlineSync.question(chalk.underline("digite seu nome ou CPF: "));

            const respostas = readlineSync.question("Bom te ver denovo " + chalk.green(nomeCliente) 
            + ", em que posso ajudar ?: \n\n" 
            + chalk.rgb(255, 136, 0).bold("1") + ". Fatura \n" 
            + chalk.rgb(255, 136, 0).bold("2") + ". Caiu um meteoro na minha rua e destruiu a rede \n" 
            + chalk.rgb(255, 136, 0).bold("3") + ". Conexao ta uma uva \n"
            + "Basta digitar uma das opcoes acima:");

                function resultado(numero){
                    if(numero === "1"){
                        return "\nFinalmente hein" + chalk.green(nomeCliente)
                        + ", Aqui esta sua fatura:\n\n\n\n\n IMAGEM PDF kk.\n\n\n\n\n";
                    }
                    if(numero === "2"){
                        return "\nVish...," + chalk.green(nomeCliente) 
                        + " Aguarde que ligaremos para agendar uma visita\n"
                    }
                    if(numero === "3"){
                        return "\nHahaHaha...," + chalk.green(nomeCliente) 
                        + " So lamento\n";
                    }
                    else{
                        return chalk.red("Voce ta vendo essa opcao ai em cima ?, ta maluco rapaiz...");
                    }
                }
        const seleciona = resultado(respostas);
        console.log(seleciona);
