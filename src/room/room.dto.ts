import { IsBoolean, IsString } from 'class-validator';
export class CreateRoomDto {
    @IsString()
    room_name: string;
    @IsBoolean()
    limited_life: boolean;
}