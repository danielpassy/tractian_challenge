import { Body, Controller, Get } from '@nestjs/common';
import { CompanyUseCases } from 'src/application/use-cases/company.use-cases';
import { mapCompanies } from './company.map';
import { CreateCompanyDto } from 'src/application/dtos';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyUseCases: CompanyUseCases) {}

  @Get()
  async getCompany() {
    return mapCompanies(await this.companyUseCases.getMany());
  }

  @Get()
  async registerCompany(@Body() createCompanyDto: CreateCompanyDto) {
    return mapCompanies([await this.companyUseCases.create(createCompanyDto)]);
  }
}
