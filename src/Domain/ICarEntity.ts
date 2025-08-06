import { UUID } from 'node:crypto';

export interface ICarEntity {
  id(): UUID;
  name(): string;
  data(): string;
  refillGasoline(liters: number): void;
  travel(distance: number): void;
  mileage(): number;
}
