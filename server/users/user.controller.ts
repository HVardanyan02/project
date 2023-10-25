import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service'; // Adjust the path accordingly
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() userData: CreateUserDto) {
    try {
      const createdUser = await this.userService.createUser(userData);
      return createdUser;
    } catch (error) {
      return { error: 'Failed to create user' };
    }
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}


