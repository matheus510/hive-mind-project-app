import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './player.dto';

@Controller('player')
export class PlayerController {
    constructor(private playerService: PlayerService){}

    @Post()
    async createPlayer(
        @Body() createPlayerDto: CreatePlayerDto,
    ) {
        console.log('Creating player with data:', createPlayerDto);
        this.playerService.createPlayer(createPlayerDto);
        return 'Player created';
    }

    @Get()
    async getPlayers() {
        return this.playerService.getPlayers();
    }

    @Get(':id')
    async getPlayer(@Param('id') id: string) {
        return this.playerService.getPlayer(id);
    }

    @Delete(':id')
    async deletePlayer(@Param('id') id: string) {
        return this.playerService.deletePlayer(id);
    }
}
