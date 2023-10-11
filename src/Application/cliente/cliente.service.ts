import { Inject, Injectable } from '@nestjs/common';
import { CreateClienteDto } from '../../Domain/cliente/dto/create-cliente.dto';
import { UpdateClienteDto } from '../../Domain/cliente/dto/update-cliente.dto';
import { ClienteGatewayInterface } from '../../Infra/adapters/cliente-gateway-interface';
import { Cliente } from '../../Domain/cliente/entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @Inject('ClienteGatewayInterface')
    private clienteGateway: ClienteGatewayInterface,
  ) {}

  async create(createClienteDto: CreateClienteDto) {
    console.log(createClienteDto);
    const cliente = new Cliente(
      createClienteDto.cpf,
      createClienteDto.name,
      createClienteDto.email,
    );
    await this.clienteGateway.create(cliente);
    return cliente;
  }

  findAll() {
    return this.clienteGateway.findAll();
  }

  findOne(id: number) {
    return this.clienteGateway.findById(id);
  }

  findCustomerByCpf(cpf: number) {
    return this.clienteGateway.findCustomerByCpf(cpf);
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    const cliente = new Cliente(
      updateClienteDto.cpf,
      updateClienteDto.name,
      updateClienteDto.email,
    );
    await this.clienteGateway.update(id, cliente);
    return cliente;
  }

  remove(id: number) {
    return this.clienteGateway.delete(id);
  }
}
