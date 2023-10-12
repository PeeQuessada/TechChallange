import { Pedido } from '../../Domain/pedido/entities/pedido.entity';

export interface PedidoGatewayInterface {
  create(Pedido: Pedido): Promise<Pedido>;
  findAll(): Promise<Pedido[]>;
}
