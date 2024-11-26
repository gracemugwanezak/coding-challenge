import { Controller, Get, Post, Body, UseGuards, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { OrderDto } from '../auth/dto/order.dto';
import { JwtGuard } from 'src/auth/guard';

@Controller('orders')
@UseGuards(JwtGuard)
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  placeOrder(@Body() orderDto: OrderDto, @GetUser('id') userId: number) {
    return this.orderService.create(orderDto, userId);
  }

  @Get(':id')
  getUserOrders(@Param('id') userId: string) {
    const parsedUserId = parseInt(userId, 10);
    return this.orderService.findByUser(parsedUserId);
  }
}
