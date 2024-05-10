import { Item } from '../model/interfaceItem';
import estoqueService from '../service/estoqueService';

const estoque = new estoqueService();

export async function adicionarProdutos(data: Item) {
    try { 
        await estoque.criar(data); 
        console.log('Produto adicionado com sucesso!');
    } 
    catch(error) {
        console.log('Erro ao adicionar produto:', error);
    }
}

export async function removerProdutos(nome: string) {
    try {
        await estoque.remover(nome);
        console.log('Produto removido com sucesso!');
    }
    catch(error) {
        console.log('Erro ao remover :', error);
    }
}

export async function listarItens() {
    try {
        await estoque.listar(); 
        console.log('Itens listados com sucesso!');
    }
    catch(error) {
        console.log('Erro ao listar itens:', error);
    }
}

export async function somarValorItens() {
    try {
        await estoque.valorTotal();
    }
    catch(error) {
        console.log('Erro ao somar valor total dos itens:', error);
    }
}

export async function somarPesoItens() {
    try {
        await estoque.pesoTotal();
    }
    catch(error) {
        console.log('Erro ao somar peso total dos itens:', error);
    }
}

export async function mediaValorItens() {
    try {
        await estoque.valorMedio();
    }
    catch(error) {
        console.log('Erro ao calcular média de valor dos itens:', error);
    }
}

export async function mediaPesoItens() {
    try {
        await estoque.pesoMedio();
    }
    catch(error) {
        console.log('Erro ao calcular média de peso dos itens:', error);
    }
}

export async function quantidadeTotalItens() {
    try {
        await estoque.quantidadeItens();
    }
    catch(error) {
        console.log('Erro ao calcular quantidade total dos itens:', error);
    }
}

export async function quantidadeTotalProdutos() {
    try {
        await estoque.quantidadeProdutos();
    }
    catch(error) {
        console.log('Erro ao calcular quantidade total de produtos:', error);
    }
}