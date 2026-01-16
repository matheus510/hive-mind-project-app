import { IsString } from "class-validator";

export class CreatePlayerDto {
    @IsString()
    player_name: string;
}