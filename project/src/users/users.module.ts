/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UsersService } from './users.service';
@Module({
  controllers: [UserController],
  // eslint-disable-next-line prettier/prettier
  providers: [UsersService],

})
// eslint-disable-next-line prettier/prettier, @typescript-eslint/no-unused-vars
export class UsersModule {}
