import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchSetence } from './redux/sentence/sentence.actions';

import Container from './components/Container/Container';
import MainContent from './components/MainContent/MainContent';
import WinnerBanner from './components/WinnerBanner/WinnerBanner';

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector(({sentence}) => sentence.count );
  
  useEffect(() => {
    dispatch(fetchSetence(count))
  }, [dispatch, count]);

  return (
    <Container>
      {
        count !== 10 ? <MainContent /> : <WinnerBanner />
      }
    </Container>
  );
}

export default App;
