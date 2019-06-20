import React from 'react';
import { render } from '@testing-library/react';
import Index from '../../src/pages';

test('index page should have "Index" word', () => {
  const { getByText } = render(<Index />);
  expect(getByText('Index Page')).toBeTruthy();
});
