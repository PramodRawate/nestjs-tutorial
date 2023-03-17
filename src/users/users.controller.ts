import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}


    @Get('/find')
    getUser(): string {
        return this.usersService.getUser();
    }

    @Post('/add')
    addUser(): string {
        return this.usersService.addUser();
    }

    @Delete('/delete')
    deleteUser(): string {
        return this.usersService.deleteUser();
    }

    @Put('/update')
    updateUser(): string {
        return this.usersService.updateUser();
    }

}
