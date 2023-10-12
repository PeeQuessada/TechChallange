import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoModule } from './Application/produto/produto.module';
import { ClienteModule } from './Application/cliente/cliente.module';
import { PedidoModule } from './Application/pedido/pedido.module';
import { ClienteModel } from './Domain/cliente/entities/cliente.model';
import { ProdutoModel } from './Domain/produto/entities/produto.model';
import { PedidoModel } from './Domain/pedido/entities/pedido.model';
import { SequelizeModule } from '@nestjs/sequelize';
@Module({
  imports: [
    ProdutoModule,
    ClienteModule,
    PedidoModule,
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: ':memory',
      autoLoadModels: true,
      models: [ClienteModel, ProdutoModel, PedidoModel],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
