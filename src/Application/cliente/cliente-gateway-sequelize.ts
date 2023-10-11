import { InjectModel } from '@nestjs/sequelize';
import { Cliente } from '../../Domain/cliente/entities/cliente.entity';
import { ClienteModel } from '../../Domain/cliente/entities/cliente.model';
import { ClienteGatewayInterface } from '../../Infra/adapters/cliente-gateway-interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClienteGatewaySequelize implements ClienteGatewayInterface {
  constructor(
    @InjectModel(ClienteModel)
    private clienteModel: typeof ClienteModel,
  ) {}

  async create(cliente: Cliente): Promise<Cliente> {
    const newCLiente = await this.clienteModel.create(cliente);
    cliente.id = newCLiente.id;
    return cliente;
  }
  async findAll(): Promise<Cliente[]> {
    const clientesModels = await this.clienteModel.findAll();
    return clientesModels.map(
      (clienteModel) =>
        new Cliente(
          clienteModel.cpf,
          clienteModel.name,
          clienteModel.email,
          clienteModel.id,
        ),
    );
  }
  async findById(id: number): Promise<Cliente> {
    const clienteModel = await this.clienteModel.findByPk(id);
    if (!clienteModel) {
      throw new Error('cliente not found');
    }
    return new Cliente(
      clienteModel.cpf,
      clienteModel.name,
      clienteModel.email,
      clienteModel.id,
    );
  }

  async findCustomerByCpf(cpf: number): Promise<Cliente> {
    const clienteModel = await this.clienteModel.findOne({
      where: {
        cpf: cpf,
      },
    });

    if (!clienteModel) {
      throw new Error('cliente not found');
    }

    return new Cliente(
      clienteModel.cpf,
      clienteModel.name,
      clienteModel.email,
      clienteModel.id,
    );
  }

  async update(id: number, cliente: Cliente): Promise<Cliente> {
    if (!id) {
      throw new Error('id cannnot be null');
    }

    const existingCliente = await this.clienteModel.findByPk(id);

    if (!existingCliente) {
      throw new Error('Cliente not found');
    }

    await existingCliente.update({
      cpf: cliente.cpf,
      name: cliente.name,
      email: cliente.email,
    });

    return new Cliente(
      existingCliente.cpf,
      existingCliente.name,
      existingCliente.email,
      existingCliente.id,
    );
  }

  async delete(id: number): Promise<void> {
    const cliente = await this.clienteModel.findByPk(id);

    if (!cliente) {
      throw new Error('Cliente not found');
    }

    await cliente.destroy();
  }
}
