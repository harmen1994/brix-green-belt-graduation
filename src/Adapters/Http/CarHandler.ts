import express, { Express, Request, Response } from 'express';
import { AvailableVehicles } from '../../Domain/Primitives/AvailableVehicles';
import { InMemoryVehicleRepo } from '../Repository/InMemoryVehicleRepo';
import { Vehicle } from './generated/rest-models';

const app: Express = express();
app.use(express.json()); // to parse JSON bodies

const port = 3000;

const cars = new InMemoryVehicleRepo();

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'active',
  });
});

app.post('/api/v1/vehicles', async (req, res) => {
  const { totalMileage = 0 } = req.body;
  const car = await cars.save(AvailableVehicles.Toyota.Camry, totalMileage);
  res.status(200).json({
    message: 'Vehicle data received successfully',
    vehicle: car.data(),
    data: req.body,
  });
});

app.get('/api/v1/vehicles', async (req, res) => {
  const fetchedCars = await cars.findAll();
  const mappedCars = fetchedCars.map((car) => {
    console.log('Mapping car:', car);
    return Vehicle.parse({
      id: car.id(),
      brand: car.modelInfo.brand,
      model: car.modelInfo.model,
      engineType: 'gasoline',
      totalMileage: car.mileage(),
      fuelConsumption: car.modelInfo.fuelConsumption,
      tankCapacity: car.modelInfo.tankCapacity,
      curentFuelType: car.fuelAmount(),
    });
  });
  res.status(200).json({
    message: 'Vehicle data retrieved successfully',
    vehicles: mappedCars,
    data: req.body,
  });
});

export const server = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
