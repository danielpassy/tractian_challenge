import { Module } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../db/user.schema';
import { Asset, AssetSchema } from '../db/asset.schema';
import { Unit, UnitSchema } from '../db/unit.schema';
import { AssetRepository } from './asset.repository';
import { UnitRepository } from './unit.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Asset.name, schema: AssetSchema },
      { name: Unit.name, schema: UnitSchema },
    ]),
  ],
  exports: [UserRepository, AssetRepository, UnitRepository],
  providers: [UserRepository, AssetRepository, UnitRepository],
})
export class RepositoriesModule {}
