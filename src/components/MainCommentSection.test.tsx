import React from 'react';
import { render, screen } from '@testing-library/react';
import { MainCommentSection } from "./MainCommentSection"

test('renders learn react link', () => {
  render(<MainCommentSection />)
  const mainSectionText = screen.getByText('Hello World')
  
  expect(mainSectionText).toBeInTheDocument()
});