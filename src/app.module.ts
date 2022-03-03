import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackModule } from './track/track.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://root:root123@cluster0.5lnxg.mongodb.net/music',
    ),
    TrackModule,
  ],
})
export class AppModule {}
