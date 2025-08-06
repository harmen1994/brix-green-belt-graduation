import request from 'supertest';
import { server } from '../src/index';

describe('GET /health', () => {
  afterAll(() => {
    server.close();
  });

  it('should respond with status 200 and JSON { status: "active" }', async () => {
    const response = await request(server).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'active' });
  });
});
