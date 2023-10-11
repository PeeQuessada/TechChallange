import { Table, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { PedidoModel } from '../../pedido/entities/pedido.model'; // Importe o modelo do pedido
import { ProdutoModel } from '../../produto/entities/produto.model'; // Importe o modelo do Produto

@Table
export class PedidoProdutoModel extends Model {
  @ForeignKey(() => PedidoModel)
  PedidoId: number;

  @ForeignKey(() => ProdutoModel)
  ProdutoId: number;

  @BelongsTo(() => PedidoModel)
  Pedido: PedidoModel;

  @BelongsTo(() => ProdutoModel)
  Produto: ProdutoModel;
}
