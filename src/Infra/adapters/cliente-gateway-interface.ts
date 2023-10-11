import { Cliente } from '../../Domain/cliente/entities/cliente.entity';

export interface ClienteGatewayInterface {
  create(Cliente: Cliente): Promise<Cliente>;
  findAll(): Promise<Cliente[]>;
  findById(id: number): Promise<Cliente>;
  findCustomerByCpf(cpf: number): Promise<Cliente>;
  update(id: number, Cliente: Cliente): Promise<Cliente>;
  delete(id: number): void;
}
