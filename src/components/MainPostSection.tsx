import React, { useState } from 'react'
import { MainProfilePicture, MainPostInput, MainInputSection, MainSection, MainForm } from './MainPostSection-styling'
import profilePicture from '../photos/caleb_quinn.png'

export const MainPostSection = () => {
  const [textValue, setTextValue] = useState("")

  const textChangedEvent = (event: React.ChangeEvent<HTMLInputElement>) => setTextValue(event.target.value)

  return (
    <MainSection>
      <MainForm>
        <MainInputSection>
          <MainProfilePicture src={ profilePicture } alt='profile' />
          <MainPostInput
            type='text'
            placeholder='What is on your mind?'
            id='postText'
            value={textValue}
            onChange={ textChangedEvent }>
          </MainPostInput>
        </MainInputSection>
      </MainForm>
    </MainSection>
  )
}