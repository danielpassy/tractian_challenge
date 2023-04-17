import { AssetEntity } from 'src/domain/entities';

export const mapAssets = (assetEntities: AssetEntity[]) => {
  return assetEntities.map((asset) => ({
    image: asset.image,
    name: asset.name,
    description: asset.description,
    model: asset.model,
    owner: asset.owner_id,
    status: asset.status,
    health_level: asset.health_level,
    id: asset.id,
  }));
};
