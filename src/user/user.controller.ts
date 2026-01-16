import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Post()
    async createUser(
        @Body() createUserDto: CreateUserDto,
    ) {
        console.log('Creating user with data:', createUserDto);
        this.userService.createUser(createUserDto);
        return 'User created';
    }

    @Get()
    async getUsers() {
        return this.userService.getUsers();
    }
}
