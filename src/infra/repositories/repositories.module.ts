import { Module } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UnitRepository } from './unit.repository';
import { AssetRepository } from './asset.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../db/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  exports: [UserRepository],
  providers: [UserRepository],
})
export class RepositoriesModule {}
