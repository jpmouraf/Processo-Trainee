import { Item } from '../model/interfaceItem.js';
import estoqueService from '../service/estoqueService.js';

export async function adicionarProdutos(data: Item) {
    try {
        const estoque = new estoqueService(); 
        await estoque.criar(data); 
        console.log('Produto adicionado com sucesso!');
    } 
    catch(error) {
        console.log('Erro ao adicionar produto:', error);
    }
}

export async function removerProdutos(nome: string) {
    try {
        const estoque = new estoqueService();
        await estoque.remover(nome);
        console.log('Produto removido com sucesso!');
    }
    catch(error) {
        console.log('Erro ao remover :', error);
    }
}

export async function listarItens(data: Item) {
    try {
        const estoque = new estoqueService();
        await estoque.listar(data); 
        console.log('Itens listados com sucesso!');
    }
    catch(error) {
        console.log('Erro ao listar itens:', error);
    }
}

export async function somarValorItens(data: Item) {
    try {
        const estoque = new estoqueService();
        await estoque.valorTotal(data);
    }
    catch(error) {
        console.log('Erro ao somar valor total dos itens:', error);
    }
}

export async function somarPesoItens(data: Item) {
    try {
        const estoque = new estoqueService();
        await estoque.pesoTotal(data);
    }
    catch(error) {
        console.log('Erro ao somar peso total dos itens:', error);
    }
}

export async function mediaValorItens(data: Item) {
    try {
        const estoque = new estoqueService();
        await estoque.valorMedio(data);
    }
    catch(error) {
        console.log('Erro ao calcular média de valor dos itens:', error);
    }
}

export async function mediaPesoItens(data: Item) {
    try {
        const estoque = new estoqueService();
        await estoque.pesoMedio(data);
    }
    catch(error) {
        console.log('Erro ao calcular média de peso dos itens:', error);
    }
}

export async function quantidadeTotalItens(data: Item) {
    try {
        const estoque = new estoqueService();
        await estoque.quantidadeItens(data);
    }
    catch(error) {
        console.log('Erro ao calcular quantidade total dos itens:', error);
    }
}

export async function quantidadeTotalProdutos(data: Item) {
    try {
        const estoque = new estoqueService();
        await estoque.quantidadeProdutos(data);
    }
    catch(error) {
        console.log('Erro ao calcular quantidade total de produtos:', error);
    }
}