import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ResponseService } from './response.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const findUser = await this.userService.findByEmail(createUserDto.email);
      if (findUser) {
        return ResponseService.error(
          'User with this email already exists',
          '400',
        );
      }
      const user = await this.userService.create(createUserDto);
      if (user) {
        return ResponseService.success(
          { data: user },
          200,
          'User Created SuccessFully',
        );
      }
    } catch (error) {
      console.log('error while saving user =', error);
      throw new BadRequestException(error);
    }
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
