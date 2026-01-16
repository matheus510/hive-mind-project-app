import { IsBoolean, IsString } from 'class-validator';
export class CreateGameDto {
    @IsString()
    game_name: string;
    @IsBoolean()
    limited_life: boolean;
    users?: string[];
}

export class AssignUserDto {
    @IsString()
    player_id: string;
}