import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:example@localhost:27017/tractian?authSource=admin',
    ),
  ],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
