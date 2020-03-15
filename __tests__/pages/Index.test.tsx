import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Index from '~pages/index/Index';

test('should contain "Index Page"', () => {
  const { getByText } = render(<Index />);
  expect(getByText('Index Page')).toHaveTextContent('Index Page');
});
