import { combineReducers } from 'redux';
import popupReducer from './popup-reducer';
import productsReducer from './products-reducer';

export default combineReducers({
  POPUP: popupReducer,
  PRODUCTS: productsReducer,
});
