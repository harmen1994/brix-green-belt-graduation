import { GasolineCar } from '../../../Domain/GasolineCar';

export interface IVehicleClient {
  save(vehicle: GasolineCar): Promise<GasolineCar>;

  findAll(): Promise<GasolineCar[]>;

  findById(id: string): Promise<GasolineCar | undefined>;

  delete(id: string): Promise<void>;
}
