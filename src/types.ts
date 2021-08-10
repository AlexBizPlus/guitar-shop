import { ReactNode } from 'react';

export interface IItemsInitialState {
  items: IGuitar[];
}

export interface IPopupInitialState {
  activePopup: null | ReactNode;
  isShowPopup: boolean;
}

export interface IItemsAction {
  type: string;
  payload: IPopupInitialState;
}

export interface IPopupAction {
  type: string;
  payload: IGuitar[];
}

export interface IGuitar {
  number: string;
  code: string;
  name: string;
  type: string;
  popularity: string;
  strings: string;
  price: string;
}
