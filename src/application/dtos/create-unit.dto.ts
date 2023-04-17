export class CreateUnitDto {
  localization: {
    lat: number;
    lng: number;
    address: string;
  };
  name: string;
}
