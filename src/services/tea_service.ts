import { Tea } from '../types';

export const getTea = ({teaName = 'Breakfast Tea', milk, sugar}: Tea) => {
  return {
    drinkType: 'Tea',
    name: teaName,
    milk: milk?.toLowerCase() === 'yes',
    sugar: sugar?.toLowerCase() === 'yes'
  };
}