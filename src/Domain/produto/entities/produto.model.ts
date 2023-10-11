import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

export type ProdutoAttributes = {
  id: number;
  nome: string;
  categoria: string;
  estoque: number;
};

@Table
export class ProdutoModel extends Model<ProdutoAttributes> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  nome: string;

  @Column
  categoria: string;

  @Column
  estoque: number;
}
