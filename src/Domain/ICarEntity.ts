export interface ICarEntity {
  id(): number;
  name(): string;
  data(): string;
  refillGasoline(liters: number): void;
  travel(distance: number): void;
  mileage(): number;
}
