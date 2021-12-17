import { RowTypes } from './row.types';

const INITIAL_STATE = {};

const rowReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RowTypes.ROW_INIT:
      return action.rows
    case RowTypes.UPDATE_COL:
      const targetCol = state[action.row.rowNumber].find(
        item => item.letter === action.row.item && !item.isMatch
      );
      targetCol.isMatch = true;
      return state  
    default:
      return state;
  }
};

export default rowReducer;
