import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateRoomDto } from './room.dto';

@Injectable()
export class RoomService {
    constructor(private prisma: PrismaService) {}
    async createRoom(payload: CreateRoomDto): Promise<any> {
        return this.prisma.room.create({
            data: {
                room_name: payload.room_name,
                limited_life: payload.limited_life,
            },
        });
    }

    async getRooms(): Promise<any[]> {
        return this.prisma.room.findMany();
    }

    async getRoom(id: string): Promise<any> {
        return this.prisma.room.findUnique({
            where: {
                room_id: id,
            },
        });
    }

    async deleteRoom(id: string): Promise<any> {
        return this.prisma.room.delete({
            where: {
                room_id: id,
            },
        });
    }
}
