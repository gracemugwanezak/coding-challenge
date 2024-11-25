import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OrderDto } from '../auth/dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  // Create order
  async create(orderDto: OrderDto, userId: number) {
    const { productIds } = orderDto;

    // Fetch the products based on the provided product IDs
    const products = await this.prisma.product.findMany({
      where: { id: { in: productIds } },
    });

    // Check if all products exist
    if (products.length !== productIds.length) {
      throw new ForbiddenException('Some products do not exist');
    }

    // Create the order and associate products with the order
    return this.prisma.order.create({
      data: {
        user: { connect: { id: userId } },
        products: {
          connect: productIds.map((id) => ({ id })),
        },
        status: 'PENDING',
      },
      include: {
        products: true,
      },
    });
  }

  // Find orders by userId
  async findByUser(userId: number) {
    return this.prisma.order.findMany({
      where: {
        userId: userId,
      },
      include: {
        products: true,
      },
    });
  }
}
