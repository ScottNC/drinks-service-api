import { Request, Response } from 'express';
import * as coffeeService from '../services/coffee_service';
import { Coffee } from '../types';

export const getCoffee = async (req: Request<object, object, object, Coffee>, res: Response) => {
  const { coffeeName } = req.query;
  const coffee = coffeeService.getCoffee(coffeeName);
  res.json(coffee).status(200);
};