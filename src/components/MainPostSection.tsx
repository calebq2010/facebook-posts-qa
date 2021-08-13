import { useState } from 'react'
import { MainProfilePicture, MainInputSection, MainSection, MainForm } from './MainPostSection-styling'
import profilePicture from '../photos/caleb_quinn.png'

export const MainPostSection = () => {
  const [textValue, setTextValue] = useState("")

  return (
    <MainSection>
      <MainForm>
        <MainInputSection>
          <MainProfilePicture src={profilePicture} alt='profile' />
        </MainInputSection>
      </MainForm>
    </MainSection>
  )
}