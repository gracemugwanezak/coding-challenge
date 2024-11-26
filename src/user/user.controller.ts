import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';
@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
  @Get('getUser')
  getUser(@GetUser() user: User) {
    return user;
  }
  @Get('getUsers')
  getUsers() {}
}
