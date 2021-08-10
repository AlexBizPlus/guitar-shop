import { IGuitar } from '../../types';
import { PRODUCTS } from './action-types';

export const setProducts = (items: IGuitar[]) => ({
  type: PRODUCTS,
  payload: items,
});
