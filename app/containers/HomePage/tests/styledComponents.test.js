import React from 'react';
import { render } from 'react-testing-library';

import { RightSection, LeftSection } from '../styledComponents';

describe('<StyledCompoents />', () => {
  it('should render an <div> tag', () => {
    const { container } = render(<RightSection />);
    expect(container.querySelector('div')).not.toBeNull();
  });

  it('should have a class attribute', () => {
    const { container } = render(<RightSection />);
    expect(container.querySelector('div').hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<RightSection id={id} />);
    expect(container.querySelector('div').id).toEqual(id);
  });
  it('should render an <div> tag', () => {
    const { container } = render(<LeftSection />);
    expect(container.querySelector('div')).not.toBeNull();
  });

  it('should have a class attribute', () => {
    const { container } = render(<LeftSection />);
    expect(container.querySelector('div').hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<LeftSection id={id} />);
    expect(container.querySelector('div').id).toEqual(id);
  });
});
