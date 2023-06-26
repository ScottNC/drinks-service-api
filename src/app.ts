import express from 'express';

export const app = express();

app.get('/', (req, res) => res.send('Welcome to the Drinks API!'));

app.get('/coffeelover', (req, res) => res.send('I like coffee'));

app.get('/coffee', (req, res) => {
  const name: string = typeof req.query?.coffeeName === 'string' ? req.query.coffeeName : 'Latte';

  res.status(200).send({
    drinkType: 'Coffee',
    name
  });
});