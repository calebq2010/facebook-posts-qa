import { render, screen } from '@testing-library/react';
import { MainPostSection } from "./MainPostSection"

const addPostStub = () => {}

test('renders main section header', () => {
  render(<MainPostSection addPost={addPostStub} />)

  const mainPostSection = screen.getByTestId('main-post-section')
  
  expect(mainPostSection).toBeInTheDocument()
});

test('renders profile picture', () => {
  render(<MainPostSection addPost={addPostStub} />)

  const profilePicture = screen.getByTestId('profile-picture')
  
  expect(profilePicture).toBeInTheDocument()
});

test('renders the text input box', () => {
  render(<MainPostSection addPost={addPostStub} />)

  const textInput = screen.getByTestId('text-input')
  
  expect(textInput).toBeInTheDocument()
});

test('renders the divider', () => {
  render(<MainPostSection addPost={addPostStub} />)

  const sectionDivider = screen.getByTestId('divider')
  
  expect(sectionDivider).toBeInTheDocument()
});

test('renders the post button section', () => {
  render(<MainPostSection addPost={addPostStub} />)

  const postButtonSection = screen.getByTestId('post-btn-section')
  
  expect(postButtonSection).toBeInTheDocument()
});

test('renders the post button', () => {
  render(<MainPostSection addPost={addPostStub} />)

  const postButton = screen.getByTestId('post-btn')
  
  expect(postButton).toBeInTheDocument()
});
