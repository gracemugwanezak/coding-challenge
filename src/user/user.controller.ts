import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { jwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';
@UseGuards(jwtGuard)
@Controller('user')
export class UserController {
  @Get('getUser')
  getUser(@GetUser() user: User) {
    return user;
  }
  @Get('getUsers')
  getUsers() {}
}
