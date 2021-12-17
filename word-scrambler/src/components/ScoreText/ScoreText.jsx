import { useSelector } from 'react-redux';


const ScoreText = () => {
  const score = useSelector(({sentence}) => sentence.score );

  return (
    <h2 id="score-text" className="heading-secondary">Score: {score}</h2>
  )
}

export default ScoreText;