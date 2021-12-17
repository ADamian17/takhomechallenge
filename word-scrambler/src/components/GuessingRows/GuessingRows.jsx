import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { fetchNextSetence, reset, nextLetter } from '../../redux/sentence/sentence.actions';
import { toggleButton } from '../../redux/nextButton/nextButton.action';

import GuessingRow from '../GuessingRow/GuessingRow';
import Cta from '../../components/Cta/Cta';

import './GuessingRows.scss';

const GuessingRows = () => {

  const dispatch = useDispatch();
  const rows = useSelector(({ rows }) => rows)
  const showNextBtn = useSelector(({ nextButton }) => nextButton.show)
  const availibleRows = rows && Object.keys(rows);
  const isSentenceCorrect = useSelector(({ sentence }) => sentence.isSentenceCorrect)

  useEffect(() => {
    if (isSentenceCorrect) {
      dispatch(toggleButton())
      return dispatch(nextLetter());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSentenceCorrect]);



  const rowsList = availibleRows.map((row, idx) =>
    <GuessingRow key={idx} row={row} />);

  const handleClick = (e) => {
    e.preventDefault()

    dispatch(toggleButton())
    dispatch(fetchNextSetence())
    dispatch(reset())
  };

  return (
    <form onSubmit={(e) => handleClick(e)} className="guessing-rows">
      {
        rowsList
      }
      {
        showNextBtn ? <Cta /> : ''
      }
    </form>
  )
}

export default GuessingRows;
