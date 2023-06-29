import { Request, Response } from 'express';
import * as teaService from '../services/tea_service';
import { Tea } from '../types';

export const getTea = async (req: Request<object, object, object, Tea>, res: Response) => {
  const tea = teaService.getTea(req.query);
  res.json(tea).status(200);
};