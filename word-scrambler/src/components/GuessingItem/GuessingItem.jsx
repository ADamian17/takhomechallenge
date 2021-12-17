import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { nextLetter, prevLetter, addToCorrectLetters, addToWrongLetters, removeFromWrongLetter } from '../../redux/sentence/sentence.actions';
import { toggleButton } from '../../redux/nextButton/nextButton.action';
import { updateCol } from '../../redux/row/row.action';

import { useFocus, } from '../../hooks/helper';
import { checkCorrectLetter, isSentenceWrong } from '../../utils/helpers';

const GuessingItem = ({ item, row }) => {
  const dispatch = useDispatch();
  const [inputRef, setInputFocus, setInputBlur] = useFocus();

  const sentence = useSelector(({ sentence }) => sentence.current);
  const activeLetter = useSelector(({ sentence }) => sentence.activeLetter);
  const wrongCount = useSelector(({ sentence }) => sentence.wrong)

  const [letter, setLetter] = useState('')

  const classList = [item.space ? 'space' : '', item.isMatch ? 'correct' : ''];

  useEffect(() => {
    if (item.tabIndex === activeLetter) {
      setInputFocus();
    }

  }, [setInputFocus, setInputBlur, item.tabIndex, item.isMatch, activeLetter]);

  const handleKeyDown = (e) => {
    if (e.keyCode === 8 && isSentenceWrong(wrongCount)) {
      setLetter('')
      dispatch(removeFromWrongLetter())
      return dispatch(prevLetter());;
    }
  }

  const handleChange = (e) => {
    const letter = e.target.value;

    if (checkCorrectLetter(sentence, letter, item.tabIndex - 1)) {
      dispatch(addToCorrectLetters(letter))
      dispatch(updateCol(row, item.letter))

      setLetter(letter);
      return dispatch(nextLetter());
    }

    dispatch(addToWrongLetters(letter))
    setLetter(letter);
    dispatch(nextLetter());
  }

  return (
    <>
      {
        item.isMatch ?
          <div className="guessing-item correct">
            {item.letter}
          </div> :
          <input
            type="text"
            readOnly={item.tabIndex === activeLetter ? false : true}
            className={
              [
                'guessing-input',
                ...classList
              ].join(' ')}
            ref={inputRef}
            name={`${item.letter}-${item.tabIndex}`}
            maxLength={1}
            value={letter}
            onKeyUp={() => {
              if (activeLetter === sentence.length) {
                dispatch(toggleButton())
                return dispatch(nextLetter());
              }
            }}
            onKeyDown={(e) => handleKeyDown(e)}
            onChange={(e) => handleChange(e)}
            tabIndex={item.tabIndex} />
      }
    </>
  )
}

export default GuessingItem;
