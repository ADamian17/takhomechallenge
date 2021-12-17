import { RowTypes } from './row.types';

export const rowInit = (rowList) => (dispatch) => {
  dispatch({
    type: RowTypes.ROW_INIT,
    rows: rowList
  })
}

export const updateCol = ( rowNumber, item ) => (dispatch) => {
  dispatch({
    type: RowTypes.UPDATE_COL,
    row: {
      rowNumber,
      item 
    }
  })
}