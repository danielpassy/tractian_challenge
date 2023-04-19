import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // it needs to load the dotenv before accessing process.env
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: process.env.DB_URI,
      }),
    }),
  ],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
