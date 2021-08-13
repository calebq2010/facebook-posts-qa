import React, { useState } from 'react'
import { MainProfilePicture, MainPostInput, MainInputSection, MainSection, MainForm, PostItButton, PostItSection, SectionDivider } from './MainPostSection-styling'
import profilePicture from '../photos/caleb_quinn.png'

export const MainPostSection = () => {
  const [textValue, setTextValue] = useState("")

  const textChangedEvent = (event: React.ChangeEvent<HTMLInputElement>) => setTextValue(event.target.value)

  return (
    <MainSection data-testid='main-post-section'>
      <MainForm>
        <MainInputSection>
          <MainProfilePicture data-testid='profile-picture' src={ profilePicture } alt='profile' />
          <MainPostInput
            data-testid='text-input'
            type='text'
            placeholder='What is on your mind?'
            id='postText'
            value={textValue}
            onChange={ textChangedEvent }>
          </MainPostInput>
        </MainInputSection>
        <SectionDivider data-testid='divider'></SectionDivider>
        <PostItSection data-testid='post-btn-section'>
          <PostItButton data-testid='post-btn' type='button'>Post It</PostItButton>
        </PostItSection>
      </MainForm>
    </MainSection>
  )
}