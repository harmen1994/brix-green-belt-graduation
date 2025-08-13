import { GasolineCar } from '../../../Domain/GasolineCar';
import { CarModel } from '../../../Domain/CarModel';

export interface IVehicleClient {
  save(carModel: CarModel, totalMileage: number): Promise<GasolineCar>;

  findAll(): Promise<GasolineCar[]>;

  findById(id: number): Promise<GasolineCar | undefined>;

  delete(id: number): Promise<void>;
}
