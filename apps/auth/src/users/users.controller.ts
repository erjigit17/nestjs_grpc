import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';

import {
  UsersServiceController,
  CreateUserDto,
  UpdateUserDTO,
  UsersServiceControllerMethods,
  FindOneUserDTO,
  PaginationDTO,
} from '@app/common';
import { Observable } from 'rxjs';
@Controller()
@UsersServiceControllerMethods()
export class UsersController implements UsersServiceController{
  constructor(private readonly usersService: UsersService) {}

  createUser(createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  findAllUsers() {
    return this.usersService.findAll();
  }

  findOneUser(findOneUserDto: FindOneUserDTO) {
    return this.usersService.findOne(findOneUserDto.id);
  }

  updateUser(updateUserDto: UpdateUserDTO) {
    return this.usersService.update(updateUserDto.id, updateUserDto);
  }

  removeUser(updateUserDto: UpdateUserDTO) {
    return this.usersService.remove(updateUserDto.id);
  }

  queryUsers(paginationDtoStream: Observable<PaginationDTO>){
    return this.usersService.queryUsers(paginationDtoStream)
  }
}
