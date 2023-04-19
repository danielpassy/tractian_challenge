import { CompanyEntity } from 'src/domain/entities';
import { CreateCompanyDto } from '../dtos';
import { Injectable } from '@nestjs/common';
import { CompanyAlreadyRegisteredError } from '../errors';
import { CompanyRepository } from 'src/infra/repositories';
@Injectable()
export class CompanyUseCases {
  constructor(private companyRepository: CompanyRepository) {}

  async getMany(): Promise<CompanyEntity[]> {
    return await this.companyRepository.getAll();
  }
  async create(CompanyDto: CreateCompanyDto): Promise<CompanyEntity> {
    const company = await this.companyRepository.getByName(CompanyDto.name);

    if (company) throw new CompanyAlreadyRegisteredError();

    const companyEntity = new CompanyEntity({
      name: CompanyDto.name,
    });
    return await this.companyRepository.create(companyEntity);
  }
}
