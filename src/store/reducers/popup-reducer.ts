import { IPopupInitialState, IPopupAction } from '../../types';
import { POPUP_ACTIVE, IS_SHOW_POPUP } from '../actions/action-types';

const initialState: IPopupInitialState = {
  activePopup: null,
  isShowPopup: false,
};

const popupReducer = (state = initialState, action: IPopupAction) => {
  switch (action.type) {
    case IS_SHOW_POPUP:
      return {
        ...state,
        isShowPopup: action.payload,
      };

    case POPUP_ACTIVE:
      return {
        ...state,
        activePopup: action.payload,
      };

    default:
      return state;
  }
};

export default popupReducer;
