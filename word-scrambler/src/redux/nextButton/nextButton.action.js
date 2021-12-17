import { NextButtonTypes } from './nextButton.types';

export const toggleButton = () => (dispatch) => {
  return dispatch({
    type:NextButtonTypes.TOGGLE_BUTTON
  });
}
