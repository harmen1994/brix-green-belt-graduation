import express, { Express, Request, Response } from 'express';
import { Car } from '../../Domain/Car';
import { AvailableVehicles } from '../../Domain/Primitives/AvailableVehicles';

const app: Express = express();
app.use(express.json()); // to parse JSON bodies

const port = 3000;

const cars = new Map<string, Car>();

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'active',
  });
});

app.post('/api/v1/vehicles', (req, res) => {
  const car = new Car(AvailableVehicles.Toyota.Camry);
  cars.set(car.id(), car);
  res.status(200).json({
    message: 'Vehicle data received successfully',
    vehicle: car.data(),
    data: req.body,
  });
});

app.get('/api/v1/vehicles', (req, res) => {
  res.status(200).json({
    message: 'Vehicle data retrieved successfully',
    vehicles:
      cars.size > 0 ? Array.from(cars.values()).map((car) => car.data()) : [],
    data: req.body,
  });
});

export const server = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
