import { InjectModel } from '@nestjs/sequelize';
import { Pedido } from '../../Domain/pedido/entities/pedido.entity';
import { PedidoModel } from '../../Domain/pedido/entities/pedido.model';
import { PedidoGatewayInterface } from '../../Infra/adapters/pedido-gateway-interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PedidoGatewaySequelize implements PedidoGatewayInterface {
  constructor(
    @InjectModel(PedidoModel)
    private pedidoModel: typeof PedidoModel,
  ) {}

  async create(pedido: Pedido): Promise<Pedido> {
    console.log('pedido ', pedido);
    const produtos = JSON.parse(pedido.produtos);
    console.log('produtos ', produtos);
    console.log('produtos ', produtos[0]);
    const newPedido = await this.pedidoModel.create({
      status: pedido.status,
      orderNumber: pedido.orderNumber,
      cliente: pedido.cliente,
      produtos: pedido.produtos,
    });
    pedido.id = newPedido.id;
    return pedido;
  }
  async findAll(): Promise<Pedido[]> {
    const pedidosModels = await this.pedidoModel.findAll();
    return pedidosModels.map(
      (pedidoModel) =>
        new Pedido(
          pedidoModel.status,
          pedidoModel.orderNumber,
          pedidoModel.cliente,
          pedidoModel.produtos,
          pedidoModel.id,
        ),
    );
  }
}
