import { render } from '@testing-library/react';

import SharedThemeHoc from './shared-theme-hoc';

describe('SharedThemeHoc', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<SharedThemeHoc />);
    expect(baseElement).toBeTruthy();
  });
  
});
