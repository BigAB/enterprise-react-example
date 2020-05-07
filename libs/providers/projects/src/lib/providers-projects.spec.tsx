import React from 'react';
import { render } from '@testing-library/react';

import ProvidersProjects from './providers-projects';

describe(' ProvidersProjects', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProvidersProjects />);
    expect(baseElement).toBeTruthy();
  });
});
