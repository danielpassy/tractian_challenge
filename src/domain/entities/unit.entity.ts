export class UnitEntity {
  public constructor(init?: Partial<UnitEntity>) {
    Object.assign(this, init);
  }

  id: number;
  name: string;
  localization: {
    lat: number;
    lng: number;
    address: string;
  };
  createdAt: Date;
}
