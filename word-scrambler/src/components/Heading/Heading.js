import { useSelector } from 'react-redux';

const Heading = () => {
  const scrambled = useSelector(({ sentence }) => sentence.scrambled);

  return (
    <h1 id="scrambled-word" className="heading-primary">
      {scrambled}
    </h1>
  );
};

export default Heading;
