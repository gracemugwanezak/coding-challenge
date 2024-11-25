import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { GetUser } from 'src/auth/decorator';
import { OrderDto } from '../auth/dto/order.dto';
@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  placeOrder(@Body() orderDto: OrderDto, @GetUser('id') userId: number) {
    return this.orderService.create(orderDto, userId);
  }

  @Get('user')
  getUserOrders(@GetUser('id') userId: number) {
    return this.orderService.findByUser(userId);
  }
}
