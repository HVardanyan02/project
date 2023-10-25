import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto'; // Import your DTO

@Injectable()
export class UserService {
  private users = []; // In-memory storage, replace with your database integration

  createUser(userData: CreateUserDto) {
    const newUser = { id: this.generateUniqueId(), ...userData };
    this.users.push(newUser);
    return newUser;
  }

  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }

  getAllUsers() {
    return this.users;
  }

  private generateUniqueId() {
    // This is a simple example; you may need a more robust method for generating IDs
    return this.users.length + 1;
  }
}
