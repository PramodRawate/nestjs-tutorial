import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {

    addUser(): string {
        return 'This will add an user';
    }

    getUser(): string {
        return 'This will find an user';
    }

    deleteUser(): string {
        return 'This will delete an user';
    }
    
    updateUser(): string {
        return 'This will update an user';
    }
}