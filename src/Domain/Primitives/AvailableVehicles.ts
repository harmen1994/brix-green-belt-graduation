import { CarModel } from '../CarModel';
import { Brand } from '../Brand';

export const AvailableVehicles: Record<Brand, Record<string, CarModel>> = {
  Toyota: {
    Corolla: {
      brand: 'Toyota',
      model: 'Corolla',
      fuelConsumption: 5,
      tankCapacity: 30,
    },
    Camry: {
      brand: 'Toyota',
      model: 'Camry',
      fuelConsumption: 7,
      tankCapacity: 40,
    },
  },
  Ford: {
    Mustang: {
      brand: 'Ford',
      model: 'Mustang',
      fuelConsumption: 8,
      tankCapacity: 50,
    },
  },
  Renault: {},
  Jaguar: {},
  Tesla: {},
} as const;
