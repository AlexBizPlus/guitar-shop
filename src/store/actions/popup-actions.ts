import { ReactNode } from 'react';
import { POPUP_ACTIVE, IS_SHOW_POPUP } from './action-types';

export const setActivePopup = (value: null | ReactNode) => ({
  type: POPUP_ACTIVE,
  payload: value,
});

export const setIsShowPopup = (flag: boolean) => ({
  type: IS_SHOW_POPUP,
  payload: flag,
});
