import { UnitEntity } from 'src/domain/entities';

export const mapUnits = (unitEntities: UnitEntity[]) => {
  return unitEntities.map((unitEntity) => {
    return {
      id: unitEntity.id,
      name: unitEntity.name,
      Localization: {
        lat: unitEntity.localization.lat,
        lng: unitEntity.localization.lng,
        address: unitEntity.localization.address,
      },
      createdAt: unitEntity.createdAt,
    };
  });
};
