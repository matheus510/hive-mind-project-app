import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateRoomDto } from './room.dto';
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
    constructor(private roomService: RoomService) {}
    @Post()
    createRoom(
        @Body() createRoomDto: CreateRoomDto,
    ) {
        console.log('Creating room with data:', createRoomDto);
        this.roomService.createRoom(createRoomDto);
        return 'Room created';
    }

    @Get()
    getRooms() {
        return this.roomService.getRooms();
    }
}
