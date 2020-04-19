import React from 'react';
import { render } from '@testing-library/react';

import { UserNavMenu } from './user-nav-menu';

describe('UserNavMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserNavMenu />);

    expect(baseElement).toBeTruthy();
  });
});
