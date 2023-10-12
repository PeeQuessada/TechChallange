import { Inject, Injectable } from '@nestjs/common';
import { CreatePedidoDto } from '../../Domain/pedido/dto/create-pedido.dto';
import { UpdatePedidoDto } from '../../Domain/pedido/dto/update-pedido.dto';
import { PedidoGatewayInterface } from '../../Infra/adapters/pedido-gateway-interface';
import { Pedido } from '../../Domain/pedido/entities/pedido.entity';

@Injectable()
export class PedidoService {
  constructor(
    @Inject('PedidoGatewayInterface')
    private pedidoGateway: PedidoGatewayInterface,
  ) {}

  async create(createPedidoDto: CreatePedidoDto) {
    const pedido = new Pedido(
      createPedidoDto.status,
      createPedidoDto.orderNumber,
      createPedidoDto.cliente,
      JSON.stringify(createPedidoDto.produtos),
    );
    await this.pedidoGateway.create(pedido);
    return pedido;
  }

  findAll() {
    return this.pedidoGateway.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} pedido`;
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return `This action updates a #${id} pedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedido`;
  }
}
