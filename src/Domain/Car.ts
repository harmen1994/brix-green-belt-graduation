import { randomUUID, UUID } from 'node:crypto';
import { CarModel } from './CarModel';
import { ICarEntity } from './ICarEntity';

export class Car implements ICarEntity {
  private readonly _id: UUID = randomUUID();
  private readonly brand: string;
  private readonly model: string;
  private readonly fuelConsumption: number; // unit is l/100 km
  private readonly tankCapacity: number;
  private totalMileage: number = 0;
  private fuelAvailable: number;

  constructor(public modelInfo: CarModel) {
    this.brand = modelInfo.brand;
    this.model = modelInfo.model;
    this.fuelConsumption = modelInfo.fuelConsumption;
    this.tankCapacity = modelInfo.tankCapacity;
    this.fuelAvailable = 0;
  }

  public refillGasoline(liters: number): void {
    this.fuelAvailable += liters;
    if (this.fuelAvailable > this.tankCapacity) {
      this.fuelAvailable = this.tankCapacity;
    }
  }

  public travel(distance: number) {
    const tripFuelConsumption = this.calculateTripFuelConsumption(distance);
    this.fuelAvailable -= tripFuelConsumption;
    this.totalMileage += distance;
  }

  public id(): UUID {
    return this._id;
  }

  public mileage(): number {
    return this.totalMileage;
  }

  public fuelAmount(): number {
    return this.fuelAvailable;
  }

  public name(): string {
    return `${this.brand} ${this.model} ${this.id()}`;
  }

  public data(): string {
    return `${this.name()}\nTotal Mileage: ${this.mileage()} Km\nFuel Available: ${this.fuelAmount()} l`;
  }

  private calculateTripFuelConsumption(distance: number) {
    //consumption unit is l/100 km
    return (this.fuelConsumption * distance) / 100;
  }
}
