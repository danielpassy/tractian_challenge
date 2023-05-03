import { Injectable } from '@nestjs/common';
import {
  AssetUseCases,
  AuthUseCases,
  UnitUseCases,
  UserUseCases,
} from 'src/application/use-cases';
import { CompanyUseCases } from 'src/application/use-cases/company.use-cases';

@Injectable()
export class AssetUseCaseService extends AssetUseCases {}

@Injectable()
export class AuthUseCasesService extends AuthUseCases {}

@Injectable()
export class CompanyUseCasesService extends CompanyUseCases {}

@Injectable()
export class UnitUseCasesService extends UnitUseCases {}

@Injectable()
export class UserUseCasesService extends UserUseCases {}
