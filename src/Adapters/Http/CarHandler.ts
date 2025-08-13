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
  const { brand, model, engineType, totalMileage = 0 } = req.body;

  const validEngineTypes = ['gasoline', 'electric'];
  if (!validEngineTypes.includes(engineType)) {
    return res.status(400).json({ message: 'Invalid engine type' });
  }

  const vehicleModel = validateVehicleModel(brand, model);
  if (!vehicleModel) {
    return res.status(400).json({ message: 'Invalid brand or model' });
  }

  const car = await cars.save(vehicleModel, totalMileage);
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

function validateVehicleModel(brand: string, model: string) {
  const models = AvailableVehicles[brand as keyof typeof AvailableVehicles];
  if (!models) return null;
  const vehicleModel = models[model];
  if (!vehicleModel) return null;
  return vehicleModel;
}

export const server = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
