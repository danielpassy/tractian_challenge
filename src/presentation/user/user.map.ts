import { UserEntity } from 'src/domain/entities';

export const mapUsers = (userEntities: UserEntity[]) => {
  return userEntities.map((userEntities) => {
    return {
      email: userEntities.email,
      name: userEntities.name,
      id: userEntities.id,
    };
  });
};
