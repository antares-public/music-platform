import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Track, TrackDocument } from './schema/track.schema';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from './schema/comment.schema';
import { CreateTrackDto } from './dto/create-track.dto';
import * as mongoose from 'mongoose';
import { CreateCommentDto } from './dto/create-comment-dto';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  async create(dto: CreateTrackDto): Promise<Track> {
    return await this.trackModel.create({ ...dto, listeners: 0 });
  }

  async getAll(): Promise<Track[]> {
    return await this.trackModel.find();
  }
  async getOne(id: mongoose.Schema.Types.ObjectId): Promise<Track> {
    return await this.trackModel.findById(id).populate('comments');
  }
  async remove(
    id: mongoose.Schema.Types.ObjectId,
  ): Promise<mongoose.Schema.Types.ObjectId> {
    const track = await this.trackModel.findByIdAndDelete(id);
    return track._id;
  }

  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const track = await this.trackModel.findById(dto.trackId);
    const comment = await this.commentModel.create({ ...dto });
    track.comments.push(comment._id);
    await track.save();
    return comment;
  }
}
