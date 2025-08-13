import { GasolineCar } from '../../Domain/GasolineCar';
import { IVehicleClient } from '../../Application/Car/Ports/IVehicleClient';
import { CarModel } from '../../Domain/CarModel';

/**
 * In-memory implementation of IVehicleClient using a Map for storage.
 */
export class InMemoryVehicleRepo implements IVehicleClient {
  private readonly cars = new Map<number, GasolineCar>();
  private nextId = 1;

  public async save(carModel: CarModel): Promise<GasolineCar> {
    const car = new GasolineCar(this.nextId++, carModel);
    this.cars.set(car.id(), car);
    return car;
  }

  public async findAll(): Promise<GasolineCar[]> {
    return Array.from(this.cars.values());
  }

  public async findById(id: number): Promise<GasolineCar | undefined> {
    return this.cars.get(id);
  }

  public async delete(id: number): Promise<void> {
    this.cars.delete(id);
  }
}
