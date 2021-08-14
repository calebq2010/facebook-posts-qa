import React, { useState, FC } from 'react'
import { MainProfilePicture, MainPostInput, MainInputSection, MainSection, MainForm, PostItButton, PostItSection, SectionDivider } from './MainPostSection-styling'
import profilePicture from '../photos/caleb_quinn.png'

type MainPostProps = {
  addPost?: (text: string) => {},
}

export const MainPostSection:FC<MainPostProps> = (props: MainPostProps) => {
  const [textValue, setTextValue] = useState("")

  const textChangedEvent = (event: React.ChangeEvent<HTMLInputElement>) => setTextValue(event.target.value)

  const onPostItClick = () => {
   props.addPost && props.addPost(textValue)
   setTextValue("")
  }

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
          <PostItButton data-testid='post-btn' type='button' onClick={ onPostItClick }>Post It</PostItButton>
        </PostItSection>
      </MainForm>
    </MainSection>
  )
}