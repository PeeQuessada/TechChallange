import { Inject, Injectable } from '@nestjs/common';
import { CreateProdutoDto } from '../../Domain/produto/dto/create-produto.dto';
import { UpdateProdutoDto } from '../../Domain/produto/dto/update-produto.dto';
import { ProdutoGatewayInterface } from '../../Infra/adapters/produto-gateway-interface';
import { Produto } from '../../Domain/produto/entities/produto.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @Inject('ProdutoGatewayInterface')
    private produtoGateway: ProdutoGatewayInterface,
  ) {}

  async create(createProdutoDto: CreateProdutoDto) {
    const produto = new Produto(
      createProdutoDto.nome,
      createProdutoDto.categoria,
      createProdutoDto.estoque,
    );
    await this.produtoGateway.create(produto);
    return produto;
  }

  findAll() {
    return this.produtoGateway.findAll();
  }

  findOne(id: number) {
    return this.produtoGateway.findById(id);
  }

  findProductByCategory(categoria: string) {
    return this.produtoGateway.findProductByCategory(categoria);
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto) {
    const produto = new Produto(
      updateProdutoDto.nome,
      updateProdutoDto.categoria,
      updateProdutoDto.estoque,
    );
    await this.produtoGateway.update(id, produto);
    return produto;
  }

  remove(id: number) {
    return this.produtoGateway.delete(id);
  }
}
