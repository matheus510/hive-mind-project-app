import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreatePlayerDto } from './player.dto';

@Injectable()
export class PlayerService {
    constructor(private prisma: PrismaService) {}
    async createPlayer(payload: CreatePlayerDto): Promise<any> {
        return this.prisma.player.create({
            data: {
                player_name: payload.player_name,
            },
        });
    }
    
    async getPlayers(): Promise<any[]> {
        return this.prisma.player.findMany();
    }

    async getPlayer(id: string): Promise<any> {
        return this.prisma.player.findUnique({
            where: {
                id: id,
            },
        });
    }

    async deletePlayer(id: string): Promise<any> {
        return this.prisma.player.delete({
            where: {
                id: id,
            },
        });
    }
}
