import { screen } from '@testing-library/react';
import { render } from '@/test-utils/render-with-providers';
import HomePage from '../page';

describe('HomePage', () => {
  it('should display a title', () => {
    render(<HomePage />);

    expect(screen.getByRole('heading', { name: 'next-template - A simple Next.js starter template' })).toBeVisible();
  });
});
