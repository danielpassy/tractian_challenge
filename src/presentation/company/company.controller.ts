import { Body, Controller, Get } from '@nestjs/common';
import { mapCompanies } from './company.map';
import { CreateCompanyDto } from 'src/application/dtos';
import { CompanyUseCasesService } from 'src/infra/nest-use-cases';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyUseCases: CompanyUseCasesService) {}

  @Get()
  async getCompany() {
    return mapCompanies(await this.companyUseCases.getMany());
  }

  @Get()
  async registerCompany(@Body() createCompanyDto: CreateCompanyDto) {
    return mapCompanies([await this.companyUseCases.create(createCompanyDto)]);
  }
}
