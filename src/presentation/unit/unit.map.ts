import { UnitEntity } from 'src/domain/entities';

export const mapUnits = (unitEntities: UnitEntity[]) => {
  return unitEntities.map((unitEntity) => {
    return {
      id: unitEntity.id,
      name: unitEntity.name,
      location: {
        lat: unitEntity.location.lat,
        lng: unitEntity.location.lng,
        address: unitEntity.location.address,
      },
      createdAt: unitEntity.createdAt,
    };
  });
};
