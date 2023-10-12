import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { PedidoGatewaySequelize } from './pedido-gateway-sequelize';
import { PedidoModel } from '../../Domain/pedido/entities/pedido.model';
import { ClienteModel } from '../../Domain/cliente/entities/cliente.model';
import { ProdutoModel } from '../../Domain/produto/entities/produto.model';
import { ClienteService } from '../cliente/cliente.service';
import { ClienteGatewaySequelize } from '../cliente/cliente-gateway-sequelize';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forFeature([PedidoModel]),
    SequelizeModule.forFeature([ClienteModel]),
    SequelizeModule.forFeature([ProdutoModel]),
  ],
  controllers: [PedidoController],
  providers: [
    PedidoService,
    ClienteService,
    ClienteGatewaySequelize,
    {
      provide: 'ClienteGatewayInterface',
      useExisting: ClienteGatewaySequelize,
    },
    PedidoGatewaySequelize,
    {
      provide: 'PedidoGatewayInterface',
      useExisting: PedidoGatewaySequelize,
    },
  ],
})
export class PedidoModule {}
