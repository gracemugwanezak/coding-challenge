import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get('viewProduct')
  viewProduct() {}
  @Get('listProducts')
  listProducts() {}
  @Post('addProduct')
  addProduct() {}
  @Patch('updateProduct')
  updateProduct() {}
  @Delete('deleteProduct')
  deleteProduct() {}
}
