"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quantidadeTotalProdutos = exports.quantidadeTotalItens = exports.mediaPesoItens = exports.mediaValorItens = exports.somarPesoItens = exports.somarValorItens = exports.listarItens = exports.removerProdutos = exports.adicionarProdutos = void 0;
const estoqueService_1 = __importDefault(require("../service/estoqueService"));
const estoque = new estoqueService_1.default();
async function adicionarProdutos(data) {
    try {
        await estoque.criar(data);
        console.log('Produto adicionado com sucesso!');
    }
    catch (error) {
        console.log('Erro ao adicionar produto:', error);
    }
}
exports.adicionarProdutos = adicionarProdutos;
async function removerProdutos(nome) {
    try {
        await estoque.remover(nome);
        console.log('Produto removido com sucesso!');
    }
    catch (error) {
        console.log('Erro ao remover :', error);
    }
}
exports.removerProdutos = removerProdutos;
async function listarItens() {
    try {
        await estoque.listar();
        console.log('Itens listados com sucesso!');
    }
    catch (error) {
        console.log('Erro ao listar itens:', error);
    }
}
exports.listarItens = listarItens;
async function somarValorItens() {
    try {
        await estoque.valorTotal();
    }
    catch (error) {
        console.log('Erro ao somar valor total dos itens:', error);
    }
}
exports.somarValorItens = somarValorItens;
async function somarPesoItens() {
    try {
        await estoque.pesoTotal();
    }
    catch (error) {
        console.log('Erro ao somar peso total dos itens:', error);
    }
}
exports.somarPesoItens = somarPesoItens;
async function mediaValorItens() {
    try {
        await estoque.valorMedio();
    }
    catch (error) {
        console.log('Erro ao calcular média de valor dos itens:', error);
    }
}
exports.mediaValorItens = mediaValorItens;
async function mediaPesoItens() {
    try {
        await estoque.pesoMedio();
    }
    catch (error) {
        console.log('Erro ao calcular média de peso dos itens:', error);
    }
}
exports.mediaPesoItens = mediaPesoItens;
async function quantidadeTotalItens() {
    try {
        await estoque.quantidadeItens();
    }
    catch (error) {
        console.log('Erro ao calcular quantidade total dos itens:', error);
    }
}
exports.quantidadeTotalItens = quantidadeTotalItens;
async function quantidadeTotalProdutos() {
    try {
        await estoque.quantidadeProdutos();
    }
    catch (error) {
        console.log('Erro ao calcular quantidade total de produtos:', error);
    }
}
exports.quantidadeTotalProdutos = quantidadeTotalProdutos;
//# sourceMappingURL=controleEstoque.js.map