import request from 'supertest';
import { app } from '../app';

test('GET /tea should return correct object', async () => {
  const res = await request(app)
    .get('/tea')
    .query({ teaName: 'Breakfast Tea', milk: "yes", sugar: "no" });

  expect(res.statusCode).toEqual(200);

  expect(res.body).toEqual({
    drinkType: 'Tea',
    name: 'Breakfast Tea',
    milk: true,
    sugar: false
  });
});

test('GET /tea should return correct object with no query', async () => {
  const res = await request(app)
    .get('/tea');

  expect(res.statusCode).toEqual(200);

  expect(res.body).toEqual({
    drinkType: 'Tea',
    name: 'Breakfast Tea',
    milk: false,
    sugar: false
  });
});

test('GET /tea should return correct object with different tea', async () => {
  const res = await request(app)
  .get('/tea')
  .query({ teaName: 'Camomile', milk: "no", sugar: "yes" });

  expect(res.statusCode).toEqual(200);

  expect(res.body).toEqual({
    drinkType: 'Tea',
    name: 'Camomile',
    milk: false,
    sugar: true
  });
});
