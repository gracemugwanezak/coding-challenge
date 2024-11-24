import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductDto } from '../auth/dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return this.prisma.product.findMany();
  }
  async findOne(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }
  async create(productDto: ProductDto) {
    return this.prisma.product.create({
      data: productDto,
    });
  }
  async update(id: number, productDto: ProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: productDto,
    });
  }
  async delete(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
