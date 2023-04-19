import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // it needs to load the dotenv before accessing process.env
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: `mongodb+srv://danielpassy:${process.env.DATABASE_PASSWORD}@brinks.klmqwgw.mongodb.net/?retryWrites=true&w=majority`,
      }),
    }),
  ],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
