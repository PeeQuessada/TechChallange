import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { ClienteGatewaySequelize } from './cliente-gateway-sequelize';
import { ClienteModel } from '../../Domain/cliente/entities/cliente.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([ClienteModel])],
  controllers: [ClienteController],
  providers: [
    ClienteService,
    ClienteGatewaySequelize,
    {
      provide: 'ClienteGatewayInterface',
      useExisting: ClienteGatewaySequelize,
    },
  ],
})
export class ClienteModule {}
