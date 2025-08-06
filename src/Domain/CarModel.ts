import { Brand } from './Brand';

export interface CarModel {
  brand: Brand;
  model: string;
  fuelConsumption: number;
  tankCapacity: number;
}
