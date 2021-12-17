import Heading from '../Heading/Heading';
import ExplanatoryText from '../ExplanatoryText/ExplanatoryText';
import ScoreText from '../ScoreText/ScoreText';
import GuessingRows from '../GuessingRows/GuessingRows';

import './MainContent.scss';

const MainContent = () => {

  return (
    <section className="main-content">
      {/* scrambled sentence */}
      <Heading />

      <ExplanatoryText />

      {/* score text  */}
      <ScoreText />

      {/* Guessing Rows */}
      <GuessingRows />
    </section>
  )
};

export default MainContent;
