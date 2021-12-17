import { render, queryByAttribute } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Heading from './components/Heading/Heading';

describe('render scrambled-word', () => {
  const { container } = render(<Heading />);

  // it will find the element with the id
  const getById = queryByAttribute.bind(null, 'id');

  const scrambledWord = getById(container, 'scrambled-word');

  it('should render element with id scrambled-word', () =>
    expect(scrambledWord).toBeInTheDocument());
});
