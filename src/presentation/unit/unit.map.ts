import { UnitEntity } from 'src/domain/entities';
import { mapAssets } from '../asset/asset.map';

export const mapUnits = (unitEntities: UnitEntity[]) => {
  return unitEntities.map((unitEntity) => {
    return {
      id: unitEntity.id,
      name: unitEntity.name,
      localization: {
        lat: unitEntity.localization.lat,
        lng: unitEntity.localization.lng,
        address: unitEntity.localization.address,
      },
      createdAt: unitEntity.createdAt,
      assets: mapAssets(unitEntity.assets),
    };
  });
};
