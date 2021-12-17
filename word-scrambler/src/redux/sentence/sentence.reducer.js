import { SentenceTypes } from './sentence.types';

import { getSentenceTrim } from '../../utils/helpers';

const INITIAL_STATE = {
  count: 1,
  score: 0,
  scrambled: '',
  current: '',
  correct: [],
  wrong: [],
  activeLetter: 1,
  isSentenceCorrect: false,
};

const sentenceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SentenceTypes.FETCH_SENTENCE:
      return {
        ...state,
        current: action.sentence,
      };
    case SentenceTypes.SCRAMBLED_SENTENCE:
      return {
        ...state,
        scrambled: action.scrambled,
      };
    case SentenceTypes.FETCH_NEXT_SENTENCE:
      return {
        ...state,
        count: state.count + 1,
        score: state.score + 1,
      };
    case SentenceTypes.RESET:
      return {
        ...state,
        ...action.resetField,
      };
    case SentenceTypes.ADD_TO_CORRECT:
      state.correct.push(action.letter);
      return {
        ...state,
      };
    case SentenceTypes.ADD_TO_WRONG:
      state.wrong.push(action.letter);
      return {
        ...state,
      };
    case SentenceTypes.REMOVE_FROM_WRONG:
      state.wrong.pop();
      return {
        ...state,
      };
    case SentenceTypes.NEXT_LETTER:
      return {
        ...state,
        activeLetter: state.activeLetter + 1,
      };
    case SentenceTypes.PREV_LETTER:
      return {
        ...state,
        activeLetter: state.activeLetter - 1,
      };

    case SentenceTypes.CHECK_SENTENCE:
      return {
        ...state,
        isSentenceCorrect:
          state.current === getSentenceTrim(state.correct) ? true : false,
      };
    default:
      return state;
  }
};

export default sentenceReducer;
