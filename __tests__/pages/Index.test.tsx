import * as React from "react";
import { render } from "react-testing-library";
import Index from '../../src/pages';

test('index page should have "Index" word', () => {
  const { getByText } = render(<Index/>);
  expect(getByText('Index Page')).toBeTruthy();
});