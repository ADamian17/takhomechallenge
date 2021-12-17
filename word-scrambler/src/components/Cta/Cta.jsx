

import { useSelector } from 'react-redux';

import './Cta.scss'

const Btn = () => {
  const sentence = useSelector(({ sentence }) => sentence.current);

  return (
    <section className="cta">
      <button
        tabIndex={sentence.length + 1}
        type="submit"
        className="cta-btn">Next</button>
    </section>
  )
};

export default Btn;