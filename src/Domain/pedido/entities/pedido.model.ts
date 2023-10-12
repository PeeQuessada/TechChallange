import {
  Column,
  Model,
  Table,
  PrimaryKey,
  ForeignKey,
} from 'sequelize-typescript';
import { ClienteModel } from '../../cliente/entities/cliente.model'; // Importe o modelo do Cliente

@Table
export class PedidoModel extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column
  orderNumber: number;

  @Column
  status: string;

  @ForeignKey(() => ClienteModel)
  @Column
  cliente: number;

  @Column
  produtos: string;
}
