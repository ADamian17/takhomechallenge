import { combineReducers } from 'redux';

import rowReducer from './row/row.reducer';
import sentenceReducer from './sentence/sentence.reducer';
import nextButtonReducer from './nextButton/nextButton.reducer';

const rootReducer = combineReducers({
  sentence: sentenceReducer,
  rows: rowReducer,
  nextButton: nextButtonReducer
});

export default rootReducer;
