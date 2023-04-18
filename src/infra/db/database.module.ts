import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://danielpassy:${process.env.DATABASE_PASSWORD}@brinks.klmqwgw.mongodb.net/?retryWrites=true&w=majority`,
    ),
  ],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
