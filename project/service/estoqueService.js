"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readCSV_1 = require("../model/readCSV");
const writeCSV_1 = require("../model/writeCSV");
const filePath = './model/estoque.csv';
class estoqueService {
    async criar(data) {
        // leitura do estoque
        let estoque = await (0, readCSV_1.readCSV)(filePath);
        if (typeof data.nome !== 'string' || isNaN(data.peso) || isNaN(data.valor) || isNaN(data.quantidade)) {
            throw new Error('Dados inválidos');
        }
        // Verifica se o item já existe no estoque
        else if (estoque.some((item) => item.nome === data.nome)) {
            throw new Error('Item já existe no estoque');
        }
        // atualiza o estoque
        else {
            estoque.push(data);
            await (0, writeCSV_1.writeCSV)(filePath, estoque);
        }
    }
    async remover(nome) {
        //leitura do estoque
        const estoque = await (0, readCSV_1.readCSV)(filePath);
        //verifica se o item existe no estoque
        const produto = estoque.find((item) => item.nome === nome);
        //produto não existe no estoque
        if (!produto) {
            throw new Error('Item não encontrado');
        }
        //remove o item do estoque
        estoque.splice(estoque.indexOf(produto), 1);
        //atualiza o estoque
        await (0, writeCSV_1.writeCSV)(filePath, estoque);
    }
    async listar() {
        //leitura do estoque
        const estoque = await (0, readCSV_1.readCSV)(filePath);
        //verifica se o estoque esta vazio, caso contrário lista os produtos ate o estoque ficar vazio
        let tamanho = estoque.length;
        if (tamanho == 0) {
            console.log("Estoque vazio");
        }
        else {
            while (tamanho > 0) {
                console.log(estoque[tamanho - 1]);
                tamanho--;
            }
        }
    }
    async valorTotal() {
        //leitura do estoque
        const estoque = await (0, readCSV_1.readCSV)(filePath);
        //verifica se o estoque esta vazio, caso contrario multiplica as quantidades pelos valores de cada produto
        let tamanho = estoque.length;
        let valor = 0;
        if (tamanho == 0) {
            console.log("Estoque vazio");
        }
        else {
            while (tamanho > 0) {
                valor += estoque[tamanho - 1].quantidade * estoque[tamanho - 1].valor;
                tamanho--;
            }
            console.log("Valor total do estoque: " + valor);
        }
    }
    async pesoTotal() {
        //leitura do estoque
        const estoque = await (0, readCSV_1.readCSV)(filePath);
        //verifica se o estoque esta vazio, caso contrario multiplica as quantidades pelos pesos de cada produto
        let tamanho = estoque.length;
        let peso = 0;
        if (tamanho == 0) {
            console.log("Estoque vazio");
        }
        else {
            while (tamanho > 0) {
                peso += estoque[tamanho - 1].quantidade * estoque[tamanho - 1].peso;
                tamanho--;
            }
            console.log("Peso total do estoque: " + peso);
        }
    }
    async valorMedio() {
        //leitura do estoque
        const estoque = await (0, readCSV_1.readCSV)(filePath);
        //verifica se o estoque está vazio
        if (estoque.length == 0) {
            console.log("Estoque vazio");
            return;
        }
        let quantidadeTotal = 0;
        let valorTotal = 0;
        // calcula o valor total e a quantidade total
        for (let i = 0; i < estoque.length; i++) {
            // converte a quantidade para string para manipular os dígitos individualmente
            const quantidadeString = estoque[i].quantidade.toString();
            // soma os dígitos da quantidade
            let somaDigitos = 0;
            for (let j = 0; j < quantidadeString.length; j++) {
                somaDigitos += parseInt(quantidadeString[j]);
            }
            // adiciona a soma dos dígitos à quantidade total
            quantidadeTotal += somaDigitos;
            // calcula o valor total
            valorTotal += somaDigitos * estoque[i].valor;
        }
        // calcula o valor médio
        const valorMedio = valorTotal / quantidadeTotal;
        console.log("Valor médio do estoque: " + valorMedio);
    }
    async pesoMedio() {
        // leitura do estoque
        const estoque = await (0, readCSV_1.readCSV)(filePath);
        // verifica se o estoque está vazio, caso contrário calcula a média de valor dos produtos
        let numProdutos = 0;
        let pesoTotal = 0;
        for (let i = 0; i < estoque.length; i++) {
            numProdutos += estoque[i].quantidade;
            pesoTotal += estoque[i].quantidade * estoque[i].peso;
        }
        if (numProdutos === 0) {
            console.log("Estoque vazio");
        }
        else {
            let pesoMedio = pesoTotal / numProdutos;
            console.log("Valor médio do estoque: " + pesoMedio);
        }
    }
    async quantidadeItens() {
        //leitura do estoque
        const estoque = await (0, readCSV_1.readCSV)(filePath);
        //verifica se o estoque esta vazio, caso contrario soma as quantidades de cada produto
        let tamanho = estoque.length;
        let quantidadeTotal = 0;
        if (tamanho == 0) {
            console.log("Estoque vazio");
        }
        else {
            for (let i = 0; i < tamanho; i++) {
                quantidadeTotal += estoque[i].quantidade;
            }
            console.log("Quantidade total do estoque: " + quantidadeTotal);
        }
    }
    async quantidadeProdutos() {
        //leitura do estoque
        const estoque = await (0, readCSV_1.readCSV)(filePath);
        //verifica se o estoque esta vazio, caso contrario retorna o tamanho do estoque
        let tamanho = estoque.length;
        if (tamanho == 0) {
            console.log("Estoque vazio");
        }
        else {
            console.log("Quantidade total de produtos no estoque: " + tamanho);
        }
    }
}
exports.default = estoqueService;
//# sourceMappingURL=estoqueService.js.map