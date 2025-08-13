import { GasolineCar } from '../../Domain/GasolineCar';
import { IVehicleClient } from '../../Application/Car/Ports/IVehicleClient';

/**
 * In-memory implementation of IVehicleClient using a Map for storage.
 */
export class InMemoryVehicleRepo implements IVehicleClient {
  private readonly cars = new Map<string, GasolineCar>();

  public async save(vehicle: GasolineCar): Promise<GasolineCar> {
    this.cars.set(vehicle.id(), vehicle);
    return vehicle;
  }

  public async findAll(): Promise<GasolineCar[]> {
    return Array.from(this.cars.values());
  }

  public async findById(id: string): Promise<GasolineCar | undefined> {
    return this.cars.get(id);
  }

  public async delete(id: string): Promise<void> {
    this.cars.delete(id);
  }
}
