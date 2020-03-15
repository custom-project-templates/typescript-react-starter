import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// TODO: eslint-config-xhmm(eslint-import-resolver-typescript) not work for path alias outside src folder
import Index from '~pages/index/Index';

test('should contain "Index Page"', () => {
  const { getByText } = render(<Index />);
  expect(getByText('Index Page')).toHaveTextContent('Index Page');
});
