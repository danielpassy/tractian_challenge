import { ModelEnum } from '../const/model.const';
import { StatusEnum } from '../const/status.const';

export class CreateAssetDto {
  image: string;
  name: string;
  description: string;
  model: ModelEnum;
  owner_id: string;
  status: StatusEnum;
  health_level: number;
  id: string;
}
