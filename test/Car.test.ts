import { Car } from '../src/Domain/Car';
import { AvailableVehicles } from '../src/Domain/Primitives/AvailableVehicles';

describe('Car', () => {
  it('should be instantiated with zero mileage', () => {
    const car = new Car(AvailableVehicles.Toyota.Corolla);
    const mileage = car.mileage();
    const amountOfFuelAvailable = car.fuelAmount();
    expect(mileage).toBe(0);
    expect(amountOfFuelAvailable).toBe(0);
    expect(car.name()).toContain('Toyota');
    expect(car.name()).toContain('Corolla');
    expect(car.data()).toContain('Total Mileage: 0 Km');
    expect(car.data()).toContain('Fuel Available: 0 l');
  });

  it('should be filled with gasoline', () => {
    const car = new Car(AvailableVehicles.Toyota.Corolla);
    car.refillGasoline(15);
    const amountOfFuelAvailable = car.fuelAmount();
    expect(amountOfFuelAvailable).toBe(15);
  });

  it('should be filled with gasoline not more than tank capacity', () => {
    const car = new Car(AvailableVehicles.Toyota.Camry);
    car.refillGasoline(75);
    const amountOfFuelAvailable = car.fuelAmount();
    expect(amountOfFuelAvailable).toBe(40);
  });

  it('should be able to travel using the fuel', () => {
    const car = new Car(AvailableVehicles.Toyota.Camry);
    car.refillGasoline(15);
    car.travel(100);
    const amountOfFuelAvailable = car.fuelAmount();
    expect(amountOfFuelAvailable).toBe(8);
    expect(car.data()).toContain('Fuel Available: 8 l');
  });

  it('should add up mileage after every trip', () => {
    const car = new Car(AvailableVehicles.Toyota.Camry);
    car.refillGasoline(15);
    car.travel(100);
    expect(car.mileage()).toBe(100);
  });

  it('should be able to travel using the fuel', () => {
    const car = new Car(AvailableVehicles.Toyota.Camry);
    car.refillGasoline(14);
    car.travel(50);
    const amountOfFuelAvailable = car.fuelAmount();
    expect(amountOfFuelAvailable).toBe(10.5);
    expect(car.data()).toContain('Fuel Available: 10.5 l');
  });
});
