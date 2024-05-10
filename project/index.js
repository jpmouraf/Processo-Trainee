"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompt = require('prompt-sync')({ sigint: true });
const controleEstoque_1 = require("./controller/controleEstoque");
async function main() {
    //fica em um loop até o usuário encerrar o programa
    while (true) {
        console.log('******************************************************');
        console.log('******************************************************');
        console.log('******************************************************');
        //Adiciona as opções para o usuário escolher
        console.log('Para adicionar produto digite: 1');
        console.log('Para remover produto digite: 2');
        console.log('Para listar os produtos digite: 3');
        console.log('Para ver o valor total do estoque digite: 4');
        console.log('Para ver o peso total do estoque digite: 5');
        console.log('Para ver a média do valor dos produtos digite: 6');
        console.log('Para ver a média do peso dos produtos digite: 7');
        console.log('Para ver a quantidade de produtos digite: 8');
        console.log('Para ver a quantidade de itens diversos digite: 9');
        console.log('Para sair do programa digite: 10');
        //Função que recebe a ação desejada
        function receber(texto) {
            return prompt(texto);
        }
        //Inicializa uma variável que recebe a ação desejada
        var entrada = receber('Digite a ação desejada: ');
        var W = parseInt(entrada, 10);
        //Invoca os possíveis cenários de acordo com a ação desejada
        switch (W) {
            case 1:
                var A = receber('Digite o nome do produto: ');
                var B = receber('Digite o peso do produto: ');
                var C = receber('Digite o valor do produto: ');
                var D = receber('Digite a quantidade do produto: ');
                const dados = {
                    nome: A,
                    peso: parseFloat(B),
                    valor: parseFloat(C),
                    quantidade: parseInt(D, 10)
                };
                await (0, controleEstoque_1.adicionarProdutos)(dados);
                break;
            case 2:
                var A = receber('Digite o nome do produto a ser removido: ');
                const confirma = receber('Tem certeza que deseja remover o produto? (S/N): ');
                if (confirma == 'S') {
                    await (0, controleEstoque_1.removerProdutos)(A);
                }
                else {
                    console.log('Operação cancelada!');
                }
                break;
            case 3:
                await (0, controleEstoque_1.listarItens)();
                break;
            case 4:
                await (0, controleEstoque_1.somarValorItens)();
                break;
            case 5:
                await (0, controleEstoque_1.somarPesoItens)();
                break;
            case 6:
                await (0, controleEstoque_1.mediaValorItens)();
                break;
            case 7:
                await (0, controleEstoque_1.mediaPesoItens)();
                break;
            case 8:
                await (0, controleEstoque_1.quantidadeTotalItens)();
                break;
            case 9:
                await (0, controleEstoque_1.quantidadeTotalProdutos)();
                break;
            case 10:
                console.log('Programa está sendo encerrado...');
                return;
        }
    }
}
main();
//# sourceMappingURL=index.js.map