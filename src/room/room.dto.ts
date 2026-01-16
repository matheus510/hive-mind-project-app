import { IsBoolean, IsString } from 'class-validator';
export class CreateRoomDto {
    @IsString()
    room_name: string;
    limited_life: boolean;
}