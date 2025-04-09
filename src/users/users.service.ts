import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `retorna todos os endpoints pro carlos`;
  }

  findOne(id: number) {
    return `esse id é #${id}`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `to aqui`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
