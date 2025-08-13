import { UUID } from 'node:crypto';

export interface IVehicleEntity {
  id(): UUID;
  name(): string;
  data(): string;
  travel(distance: number): void;
  mileage(): number;
}
