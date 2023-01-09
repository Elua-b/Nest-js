/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post ,Put} from '@nestjs/common';
import { Body, Delete, Param } from '@nestjs/common/decorators';
import { AppService } from '../app.service';
import { UsersService } from './users.service';
@Controller('users')
export class UserController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getUsers() {
    return 'Hello';
  }
  @Post()
  insertUser(
    @Body('name') name: string,
    @Body('age') age: number,
    @Body('surname') surname: string,
    @Body('email') email: string,
  ) {
    const userId = this.usersService.insertUser(name, age, surname, email);
    return {
      id: userId,
    };
  } 
  @Get()
  getAllUsers(){
   return this.usersService.getAllUsers();
  }
  @Get(':userId')
  getUser(
   @Param('userId')userId: string
  ){
   return this.usersService.getUser(userId)
  }
  @Put(':userId')
  updateUser(
   @Param('userId')userId: string,
   @Body('name') name: string,
   @Body('age')age:number,
   @Body('surname')surname: string,
   @Body('email')email: string,
   ){
    return this.usersService.updateUser(userId, name, age, surname, email)
   }
   @Delete(':userId')
   deleteUser(@Param('userId')userId: string){
    this.usersService.deleteUser(userId)
   }
}
