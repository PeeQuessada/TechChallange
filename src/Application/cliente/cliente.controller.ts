import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from '../../Domain/cliente/dto/create-cliente.dto';
import { UpdateClienteDto } from '../../Domain/cliente/dto/update-cliente.dto';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.create(createClienteDto);
  }

  @Get()
  findAll() {
    return this.clienteService.findAll();
  }

  @Get('findById/:id')
  findOne(@Param('id') id: number) {
    console.log('id => ', id);
    return this.clienteService.findOne(+id);
  }

  @Get('cpf/:cpf')
  findCustomerByCpf(@Param('cpf') cpf: number) {
    console.log('cpf => ', cpf);
    return this.clienteService.findCustomerByCpf(cpf);
  }

  @Patch('update/:id')
  update(@Param('id') id: number, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clienteService.update(+id, updateClienteDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: number) {
    return this.clienteService.remove(+id);
  }
}
