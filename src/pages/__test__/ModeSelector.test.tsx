import React from 'react';
import { render as testRender } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { CategoryManagerProvider } from 'contexts/CategoryManager';
import { EventManagerProvider } from 'contexts/EventManager';

import Component from '../ModeSelector';

function render(children: React.ReactChild) {
  return testRender(
    <Router>
      <EventManagerProvider>
        <CategoryManagerProvider>
          {children}
        </CategoryManagerProvider>
      </EventManagerProvider>
    </Router>,
  );
}

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Page ModeSelector', () => {
  test('should render and', async () => {
    const { getByText } = render(<Component />);
    expect(getByText(/set up/i)).toBeInTheDocument();
  });
});
