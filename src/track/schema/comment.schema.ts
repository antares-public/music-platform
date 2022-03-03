import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Track } from './track.schema';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop()
  name: string;

  @Prop()
  artist: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Track' })
  track: Track;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
