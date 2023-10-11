import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

export type ClienteAttributes = {
  id: number;
  cpf: number;
  name: string;
  email: string;
};

@Table
export class ClienteModel extends Model<ClienteAttributes> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  cpf: number;

  @Column
  name: string;

  @Column
  email: string;
}
