import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateGameDto } from './game.dto';

@Injectable()
export class GameService {
    constructor(private prisma: PrismaService) {}
    async createGame(payload: CreateGameDto): Promise<any> {
        return this.prisma.game.create({
            data: {
                game_name: payload.game_name,
                limited_life: payload.limited_life,
            },
        });
    }

    async getGames(): Promise<any[]> {
        const result = await this.prisma.game.findMany({
            include: {
                players: true,
            },
        });
        return result
    }

    async getGame(id: string): Promise<any> {
        return this.prisma.game.findUnique({
            where: {
                id: id,
            },
            include: {
                players: true,
            },
        });
    }

    async deleteGame(id: string): Promise<any> {
        return this.prisma.game.delete({
            where: {
                id: id,
            },
        });
    }

    async assignUserToGame(gameId: string, playerId: string): Promise<any> {
        // create player state
        // add socketId when possible 
        await this.prisma.playerState.create({
            data: {
                player_id: playerId,
                game_id: gameId,
                has_played: false,
            },
        })
        
        return this.prisma.game.update({
            where: {
                id: gameId,
            },
            data: {
                players: {
                    connect: {
                        player_id: playerId,
                    },
                },
            },
        });
    }

    async removeUserFromGame(gameId: string, playerId: string): Promise<any> {
        return this.prisma.game.update({
            where: {
                id: gameId,
            },
            data: {
                players: {
                    disconnect: {
                        player_id: playerId,
                    },
                },
            },
        });
    }
}