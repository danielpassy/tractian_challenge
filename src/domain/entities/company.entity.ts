export class CompanyEntity {
  public constructor(init?: Partial<CompanyEntity>) {
    Object.assign(this, init);
  }
  name: string;
}
