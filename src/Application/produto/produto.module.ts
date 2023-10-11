import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProdutoModel } from 'src/Domain/produto/entities/produto.model';
import { ProdutoGatewaySequelize } from './produto-gateway-sequelize';

@Module({
  imports: [SequelizeModule.forFeature([ProdutoModel])],
  controllers: [ProdutoController],
  providers: [
    ProdutoService,
    ProdutoGatewaySequelize,
    {
      provide: 'ProdutoGatewayInterface',
      useExisting: ProdutoGatewaySequelize,
    },
  ],
})
export class ProdutoModule {}
