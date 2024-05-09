import { Item } from '../model/interfaceItem.js';
import { readCSV } from '../model/readCSV.js';
import { writeCSV } from '../model/writeCSV.js';
import fs from 'fs';

const filePath = './model/estoque.csv';

export default class estoqueService {
  async criar(data: Item) {
    if (typeof data.nome !== 'string' || isNaN(data.peso) || isNaN(data.valor) || isNaN(data.quantidade)) {
      throw new Error('Dados inválidos');
    }
    // Leitura do estoque
    const estoque = await readCSV(filePath);
    // Verifica se o item já existe no estoque
    if (estoque.find((item) => item.nome === data.nome)) {
      throw new Error('Item já existe no estoque');
    }
    // Adiciona o item ao estoque
    estoque.push(data);
    await writeCSV(filePath, estoque);
  }

  async remover(nome: string) {
    //leitura do estoque
    const estoque = await readCSV(filePath);
    //verifica se o item existe no estoque
    const produto = estoque.find((item) => item.nome === nome);
    //produto não existe no estoque
    if (!produto) {
      throw new Error('Item não encontrado');
    }
    //remove o item do estoque
    estoque.splice(estoque.indexOf(produto), 1);
    //atualiza o estoque
    await writeCSV(filePath, estoque);
  }

  async listar(data: Item) {
    //leitura do estoque
    const estoque = await readCSV(filePath);
    //verifica se o estoque esta vazio, caso contrário lista os produtos ate o estoque ficar vazio
    var tamanho = estoque.length;
    if(tamanho == 0){
      console.log("Estoque vazio")
    }
    else{
    while (tamanho > 0) {
      console.log(estoque[tamanho - 1]);
      tamanho--;
    }
  }
}

  async valorTotal(data: Item) {
    //leitura do estoque
    const estoque = await readCSV(filePath);
    //verifica se o estoque esta vazio, caso contrario multiplica as quantidades pelos valores de cada produto
    var tamanho = estoque.length;
    var valor = 0;
    if(tamanho == 0){
      console.log("Estoque vazio")
    }
    else{
      while (tamanho > 0) {
        valor += estoque[tamanho - 1].quantidade * estoque[tamanho - 1].valor;
        tamanho--;
      }
      console.log("Valor total do estoque: " + valor);
    }
  }

  async pesoTotal(data: Item) {
    //leitura do estoque
    const estoque = await readCSV(filePath);
    //verifica se o estoque esta vazio, caso contrario multiplica as quantidades pelos pesos de cada produto
    var tamanho = estoque.length;
    var peso = 0;
    if(tamanho == 0){
      console.log("Estoque vazio")
    }
    else{
      while (tamanho > 0) {
        peso += estoque[tamanho - 1].quantidade * estoque[tamanho - 1].peso;
        tamanho--;
      }
      console.log("Peso total do estoque: " + peso);
      }
  }

  async valorMedio(data: Item) {
    //leitura do estoque
    const estoque = await readCSV(filePath);
    //verifica se o estoque esta vazio, caso contrario calcula a média de valor dos produtos
    var tamanho = estoque.length;
    var valor = 0;
    if(tamanho == 0){
      console.log("Estoque vazio")
    }
    else{
      while (tamanho > 0) {
        valor += estoque[tamanho - 1].quantidade * estoque[tamanho - 1].valor;
        tamanho --;
      }
      console.log("Valor médio do estoque: " + valor/tamanho);
    }
  }

  async pesoMedio(data: Item) {
    //leitura do estoque
    const estoque = await readCSV(filePath);
    //verifica se o estoque esta vazio, caso contrario calcula a média de peso dos produtos
    var tamanho = estoque.length;
    var peso = 0;
    if(tamanho == 0){
      console.log("Estoque vazio")
    }
    else{
      while (tamanho > 0) {
        peso += estoque[tamanho - 1].quantidade * estoque[tamanho - 1].peso;
        tamanho --;
      }
      console.log("Peso médio do estoque: " + peso/tamanho);
    }
  }

  async quantidadeItens(data: Item) {
    //leitura do estoque
    const estoque = await readCSV(filePath);
    //verifica se o estoque esta vazio, caso contrario soma as quantidades de cada produto
    var tamanho = estoque.length;
    var quantidade = 0;
    if(tamanho == 0){
      console.log("Estoque vazio")
    }
    else{
      while (tamanho > 0) {
        quantidade += estoque[tamanho - 1].quantidade;
        tamanho --;
      }
      console.log("Quantidade total do estoque: " + quantidade);
    }
  }

  async quantidadeProdutos(data: Item) {
    //leitura do estoque
    const estoque = await readCSV(filePath);
    //verifica se o estoque esta vazio, caso contrario retorna o tamanho do estoque
    var tamanho = estoque.length;
    if(tamanho == 0){
      console.log("Estoque vazio")
    }
    else{
      console.log("Quantidade total de produtos no estoque: " + tamanho);
    }
    }
}