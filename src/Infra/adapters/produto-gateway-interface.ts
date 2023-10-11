import { Produto } from '../../Domain/produto/entities/produto.entity';

export interface ProdutoGatewayInterface {
  create(Produto: Produto): Promise<Produto>;
  findAll(): Promise<Produto[]>;
  findById(id: number): Promise<Produto>;
  findProductByCategory(categoria: string): Promise<Produto[]>;
  update(id: number, Produto: Produto): Promise<Produto>;
  delete(id: number): void;
}
