import { IItemsInitialState, IItemsAction } from '../../types';
import { PRODUCTS } from '../actions/action-types';

const initialState: IItemsInitialState = {
  items: [],
};

const productsReducer = (state = initialState, action: IItemsAction) => {
  switch (action.type) {
    case PRODUCTS:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
