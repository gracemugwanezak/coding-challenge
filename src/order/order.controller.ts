import { Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';
@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post('placeOrder')
  placeOrder() {}
  @Get('viewOrders')
  viewOrders() {}
}
