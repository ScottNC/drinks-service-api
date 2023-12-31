import request from 'supertest';
import { app } from '../app';
// ⚠️ This should error as "../app" doesn't exist yet!
describe('Test home API endpoint request', () => {
  test('GET should return correct message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Welcome to the Drinks API!');
  });

  test('/coffeelover should return I like coffee', async () => {
    const res = await request(app).get('/coffeelover');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('I like coffee');
  });
});