import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { TrackService } from './track.service';

@Controller('/api/tracks')
export class TrackController {
  constructor(private trackService: TrackService) {}

  @Post()
  create(@Body() dto: CreateTrackDto) {
    return this.trackService.create(dto);
  }

  @Get()
  getAll() {
    return 'dcdc';
  }

  @Get(':id')
  getOne() {
    return '';
  }

  @Delete()
  remove() {
    return '';
  }
}
