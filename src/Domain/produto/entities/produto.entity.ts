export class Produto {
  id: number;
  nome: string;
  categoria: string;
  estoque: number;

  constructor(nome: string, categoria: string, estoque: number, id?: number) {
    this.nome = nome;
    this.categoria = categoria;
    this.estoque = estoque;
    this.id = id;
  }
}
