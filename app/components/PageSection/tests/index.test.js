import React from 'react';
import { render } from 'react-testing-library';

import PageSection from '../index';

describe('<PageSection />', () => {
  it('should render an <a> tag', () => {
    const { container } = render(<PageSection />);
    expect(container.querySelector('div')).not.toBeNull();
  });

  it('should have a class attribute', () => {
    const { container } = render(<PageSection />);
    expect(container.querySelector('div').hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<PageSection id={id} />);
    expect(container.querySelector('div').id).toEqual(id);
  });
});
