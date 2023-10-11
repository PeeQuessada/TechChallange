import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from '../../Domain/produto/dto/create-produto.dto';
import { UpdateProdutoDto } from '../../Domain/produto/dto/update-produto.dto';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtoService.create(createProdutoDto);
  }

  @Get()
  findAll() {
    return this.produtoService.findAll();
  }

  @Get('find/:id')
  findOne(@Param('id') id: number) {
    return this.produtoService.findOne(+id);
  }

  @Get('categoria/:categoria')
  findProductByCategory(@Param('categoria') categoria: string) {
    console.log('categoria ', categoria);
    return this.produtoService.findProductByCategory(categoria);
  }

  @Patch('update/:id')
  update(@Param('id') id: number, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtoService.update(+id, updateProdutoDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: number) {
    return this.produtoService.remove(+id);
  }
}
