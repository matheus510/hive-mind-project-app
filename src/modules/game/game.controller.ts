import { Body, Controller, Post, Get, Delete, Param, Put } from '@nestjs/common';
import { CreateGameDto, AssignUserDto } from './game.dto';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
    constructor(private gameService: GameService) {}
    @Post()
    createGame(
        @Body() createGameDto: CreateGameDto,
    ) {
        console.log('Creating game with data:', createGameDto);
        this.gameService.createGame(createGameDto);
        return 'Game created';
    }

    @Get()
    getGames() {
        return this.gameService.getGames();
    }

    @Get(':id')
    getGame(@Param('id') id: string) {
        return this.gameService.getGame(id);
    }

    @Delete(':id')
    deleteGame(@Param('id') id: string) {
        return this.gameService.deleteGame(id);
    }

    @Put(':id')
    assignUserToGame(@Param('id') id: string, @Body() assignUserDto: AssignUserDto) {
        console.log(`Assigning user ${assignUserDto.player_id} to game ${id}`);
        return this.gameService.assignUserToGame(id, assignUserDto.player_id);
    }

    @Put(':id/remove-user')
    removeUserFromGame(@Param('id') id: string, @Body() assignUserDto: AssignUserDto) {
        console.log(`Removing user ${assignUserDto.player_id} from game ${id}`);
        return this.gameService.removeUserFromGame(id, assignUserDto.player_id);
    }
}
