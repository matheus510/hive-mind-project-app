import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}
    async createUser(payload: CreateUserDto): Promise<any> {
        return this.prisma.user.create({
            data: {
                user_name: payload.user_name,
            },
        });
    }
    
    async getUsers(): Promise<any[]> {
        return this.prisma.user.findMany();
    }
}
