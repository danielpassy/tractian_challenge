type Location = {
  lat: number;
  lng: number;
  address: string;
};

export class UnitEntity {
  id: number;
  name: string;
  location: Location;
  createdAt: Date;
}
