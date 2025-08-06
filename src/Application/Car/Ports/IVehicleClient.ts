import { Car } from '../../../Domain/Car';

export interface IVehicleClient {
  save(vehicle: Car): Promise<Car>;

  findAll(): Promise<Car[]>;

  findById(id: string): Promise<Car | undefined>;

  delete(id: string): Promise<void>;
}
