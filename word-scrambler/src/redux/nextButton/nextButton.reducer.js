import { NextButtonTypes } from './nextButton.types';

const INITIAL_STATE = {
  show: false,
};

const nextButtonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NextButtonTypes.TOGGLE_BUTTON:
      return {
        ...state,
        show: !state.show,
      };
    default:
      return state;
  }
};

export default nextButtonReducer;
