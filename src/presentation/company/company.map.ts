import { CompanyEntity } from 'src/domain/entities';

export const mapCompanies = (companyEntities: CompanyEntity[]) => {
  return companyEntities.map((companyEntity) => {
    return {
      name: companyEntity.name,
    };
  });
};
