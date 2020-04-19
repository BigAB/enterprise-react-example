import React from 'react';
import { render } from '@testing-library/react';

import { NavigationMenu } from './navigation-menu';

describe(' NavigationMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationMenu>Navigate</NavigationMenu>);
    expect(baseElement).toBeTruthy();
  });
});
