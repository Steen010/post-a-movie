import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { Get, Param, Post, Body, Put } from '@nestjs/common';
import { IUser } from '@avans-indiv-p2/shared/api';
import { CreateUserDto, UpdateUserDto } from '@avans-indiv-p2/backend/dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('')
  getAll(): IUser[] {
    return this.userService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): IUser {
    return this.userService.getOne(id);
  }

  @Post('')
  create(@Body() data: CreateUserDto): IUser {
    return this.userService.create(data);
  }

  @Put('')
  update(@Body() data: UpdateUserDto): IUser {
    return this.userService.update(data);
  }
}
