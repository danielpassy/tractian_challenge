import { UnitEntity } from 'src/domain/entities';
import { MongoBaseRepository } from './mongo-base.repository';

export class UnitRepository extends MongoBaseRepository<UnitEntity> {
  // constructor(@InjectModel(Unit.name) private userModel) {
  //   super(userModel);
  // }
}
