import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Calendar from './Calendar';

describe('Calendar component', () => {
  it('should render the current year (2019)', () => {
    let now = 1573952801285;
    Date.now = jest.spyOn(Date, 'now').mockImplementation(() => now);

    let { getByLabelText } = render(<Calendar />);
    expect(getByLabelText('year')).toHaveValue('2019');

    Date.now.mockRestore();
  });

  it('should render the current year (2018)', () => {
    let now = 1514784800000;
    Date.now = jest.spyOn(Date, 'now').mockImplementation(() => now);

    let { getByLabelText } = render(<Calendar />);
    expect(getByLabelText('year')).toHaveValue('2018');

    Date.now.mockRestore();
  });
});