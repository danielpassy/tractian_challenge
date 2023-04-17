import { AssetEntity } from './asset.entity';

export class UnitEntity {
  public constructor(init?: Partial<UnitEntity>) {
    Object.assign(this, init);
  }
  assets: AssetEntity[];
  id: number;
  name: string;
  localization: Localization;
  createdAt: Date;
}

export class Localization {
  public constructor(init?: Partial<UnitEntity>) {
    Object.assign(this, init);
  }
  lat: number;
  lng: number;
  address: string;
}
