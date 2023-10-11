import {
  Column,
  Model,
  Table,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from 'sequelize-typescript';
import { ClienteModel } from '../../cliente/entities/cliente.model'; // Importe o modelo do Cliente
import { ProdutoModel } from '../../produto/entities/produto.model'; // Importe o modelo do Produto
import { PedidoProdutoModel } from '../../pedidoProduto/entities/pedidoProduto.model'; // Importe o modelo do Produto

@Table
export class PedidoModel extends Model {
  @PrimaryKey
  @Column
  id: number;

  // Defina as colunas específicas do Pedido

  @ForeignKey(() => ClienteModel)
  @Column
  ClienteId: number;

  @BelongsTo(() => ClienteModel)
  Cliente: ClienteModel;

  @BelongsToMany(() => ProdutoModel, () => PedidoProdutoModel)
  Produtos: ProdutoModel[];
}
