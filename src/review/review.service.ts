import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ReviewDto } from 'src/auth/dto';

@Injectable({})
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  async create(reviewDto: ReviewDto, userId: number) {
    const { productId, rating, comment } = reviewDto;

    // Check if the user has purchased the product
    const order = await this.prisma.order.findFirst({
      where: {
        userId,
        products: { some: { id: productId } },
      },
    });

    if (!order) {
      throw new ForbiddenException(
        'You can only review products you have purchased',
      );
    }

    // Create the review
    return this.prisma.review.create({
      data: {
        userId,
        productId,
        rating,
        comment,
      },
    });
  }

  async findByProduct(productId: number) {
    return this.prisma.review.findMany({
      where: { productId },
      include: { user: true },
    });
  }
}
