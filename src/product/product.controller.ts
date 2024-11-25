import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Param,
  Body,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from '../auth/dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productService.findOne(Number(id));
  }
  @Get()
  getAllProducts() {
    return this.productService.findAll();
  }
  @Post()
  createProduct(@Body() productDto: ProductDto) {
    return this.productService.create(productDto);
  }
  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() productDto: ProductDto) {
    return this.productService.update(Number(id), productDto);
  }
  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.delete(Number(id));
  }
}
