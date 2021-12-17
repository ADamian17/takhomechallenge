import { SentenceTypes } from './sentence.types';
import { rowInit } from '../row/row.action';

import * as Sentence from '../../api/sentence';
import { ScrambledSentenceGenerator, gerenateRows } from '../../utils/helpers';

export const fetchSetence = (count) => async (dispatch) => {
  try {
    const res = await Sentence.fetchFakeSentences(count);
    const sentence = res.sentence;

    dispatch({
      type: SentenceTypes.FETCH_SENTENCE,
      sentence,
    });

    dispatch(rowInit(gerenateRows(sentence.split(''))));

    const scrambled = new ScrambledSentenceGenerator(
      sentence
    ).generateScramble();

    dispatch({
      type: SentenceTypes.SCRAMBLED_SENTENCE,
      scrambled,
    });
  } catch (err) {
    return console.log(err);
  }
};

export const fetchNextSetence = () => (dispatch) => {
  return dispatch({
    type: SentenceTypes.FETCH_NEXT_SENTENCE,
  });
};

export const reset = () => (dispatch) => {
  return dispatch({
    type: SentenceTypes.RESET,
    resetField: {
      correct: [],
      wrong: [],
      activeLetter: 1,
      isSentenceCorrect: false,
    },
  });
};

export const nextLetter = () => (dispatch) => {
  return dispatch({
    type: SentenceTypes.NEXT_LETTER,
  });
};

export const prevLetter = () => (dispatch) => {
  return dispatch({
    type: SentenceTypes.PREV_LETTER,
  });
};

export const addToCorrectLetters = (letter) => (dispatch) => {
  dispatch({
    type: SentenceTypes.ADD_TO_CORRECT,
    letter,
  });

  return dispatch({
    type: SentenceTypes.CHECK_SENTENCE,
  });
};

export const addToWrongLetters = (letter) => (dispatch) => {
  return dispatch({
    type: SentenceTypes.ADD_TO_WRONG,
    letter,
  });
};

export const removeFromWrongLetter = () => (dispatch) => {
  return dispatch({
    type: SentenceTypes.REMOVE_FROM_WRONG,
  });
};
