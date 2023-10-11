import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoModule } from './Application/produto/produto.module';
import { ClienteModule } from './Application/cliente/cliente.module';
import { ClienteModel } from './Domain/cliente/entities/cliente.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProdutoModel } from './Domain/produto/entities/produto.model';

@Module({
  imports: [
    ProdutoModule,
    ClienteModule,
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: ':memory',
      autoLoadModels: true,
      models: [ClienteModel, ProdutoModel],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
