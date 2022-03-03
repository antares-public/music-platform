import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Track, TrackDocument } from './schema/track.schema';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from './schema/comment.schema';
import { CreateTrackDto } from './dto/create-track.dto';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  async create(dto: CreateTrackDto): Promise<Track> {
    return await this.trackModel.create({ ...dto, listeners: 0 });
  }

  async getAll() {
    return '';
  }
  async getOne() {
    return '';
  }
  async remove() {
    return '';
  }
}
