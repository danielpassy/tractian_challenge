import { Module } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../db/user.schema';
import { Asset, AssetSchema } from '../db/asset.schema';
import { Unit, UnitSchema } from '../db/unit.schema';
import { AssetRepository } from './asset.repository';
import { UnitRepository } from './unit.repository';
import { Company, CompanySchema } from '../db/company.schema';
import { CompanyRepository } from './company.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Asset.name, schema: AssetSchema },
      { name: Unit.name, schema: UnitSchema },
      { name: Company.name, schema: CompanySchema },
    ]),
  ],
  exports: [UserRepository, AssetRepository, UnitRepository, CompanyRepository],
  providers: [
    UserRepository,
    AssetRepository,
    UnitRepository,
    CompanyRepository,
  ],
})
export class RepositoriesModule {}
