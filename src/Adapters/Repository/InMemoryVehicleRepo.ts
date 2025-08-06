import { Car } from '../../Domain/Car';
import { IVehicleClient } from '../../Application/Car/Ports/IVehicleClient';

/**
 * In-memory implementation of IVehicleClient using a Map for storage.
 */
export class InMemoryVehicleRepo implements IVehicleClient {
  private readonly cars = new Map<string, Car>();

  public async save(vehicle: Car): Promise<Car> {
    this.cars.set(vehicle.id(), vehicle);
    return vehicle;
  }

  public async findAll(): Promise<Car[]> {
    return Array.from(this.cars.values());
  }

  public async findById(id: string): Promise<Car | undefined> {
    return this.cars.get(id);
  }

  public async delete(id: string): Promise<void> {
    this.cars.delete(id);
  }
}
