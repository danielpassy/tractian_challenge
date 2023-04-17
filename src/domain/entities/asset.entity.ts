import { ModelEnum } from 'src/application/const/model.const';
import { StatusEnum } from 'src/application/const/status.const';
import { UserEntity } from './user.entity';

export class AssetEntity {
  public constructor(init?: Partial<AssetEntity>) {
    Object.assign(this, init);
  }

  image: string;
  name: string;
  description: string;
  model: ModelEnum;
  owner: UserEntity;
  status: StatusEnum;
  health_level: number;
  id: string;
}
