import { InjectModel } from '@nestjs/sequelize';
import { Produto } from '../../Domain/produto/entities/produto.entity';
import { ProdutoModel } from '../../Domain/produto/entities/produto.model';
import { ProdutoGatewayInterface } from '../../Infra/adapters/produto-gateway-interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutoGatewaySequelize implements ProdutoGatewayInterface {
  constructor(
    @InjectModel(ProdutoModel)
    private produtoModel: typeof ProdutoModel,
  ) {}

  async create(produto: Produto): Promise<Produto> {
    const newProduto = await this.produtoModel.create(produto);
    produto.id = newProduto.id;

    return produto;
  }
  async findAll(): Promise<Produto[]> {
    const produtosModels = await this.produtoModel.findAll();

    return produtosModels.map(
      (produtoModel) =>
        new Produto(
          produtoModel.nome,
          produtoModel.categoria,
          produtoModel.estoque,
          produtoModel.id,
        ),
    );
  }
  async findById(id: number): Promise<Produto> {
    const produtoModel = await this.produtoModel.findByPk(id);

    if (!produtoModel) {
      throw new Error('Produto not found');
    }

    return new Produto(
      produtoModel.nome,
      produtoModel.categoria,
      produtoModel.estoque,
      produtoModel.id,
    );
  }

  async findProductByCategory(categoria: string): Promise<Produto[]> {
    const produtosModel = await this.produtoModel.findAll({
      where: {
        categoria: categoria,
      },
    });

    if (!produtosModel) {
      throw new Error('cliente not found');
    }

    return produtosModel.map(
      (produtoModel) =>
        new Produto(
          produtoModel.nome,
          produtoModel.categoria,
          produtoModel.estoque,
          produtoModel.id,
        ),
    );
  }

  async update(id: number, produto: Produto): Promise<Produto> {
    if (!id) {
      throw new Error('id cannnot be null');
    }

    const existingProduto = await this.produtoModel.findByPk(id);

    if (!existingProduto) {
      throw new Error('Cliente not found');
    }

    await existingProduto.update({
      nome: produto.nome,
      categoria: produto.categoria,
      estoque: produto.estoque,
      id: produto.id,
    });

    return new Produto(
      existingProduto.nome,
      existingProduto.categoria,
      existingProduto.estoque,
      existingProduto.id,
    );
  }

  async delete(id: number): Promise<void> {
    const produto = await this.produtoModel.findByPk(id);

    if (!produto) {
      throw new Error('produto not found');
    }

    await produto.destroy();
  }
}
