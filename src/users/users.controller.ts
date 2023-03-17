import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {


    @Get('/find')
    getUser(): string {
        return 'This will get the user'; 
    }

    @Post('/add')
    addUser(): string {
        return 'This will add an user';
    }

    @Delete('/delete')
    deleteUser(): string {
        return 'This will delete an user';
    }

    @Put('/update')
    updateBook(): string {
        return 'This will update an user';
    }


}
