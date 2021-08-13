import styled from 'styled-components'

export const MainSection = styled.section`
  width: 95%;
  border-radius: 8px;
`

export const MainForm = styled.form`
  border-radius: 8px;
  background: #ffffff;
`

export const MainProfilePicture = styled.img`
    width: 40px;
    border-radius: 50%;
`

export const MainInputSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
`

export const MainPostInput = styled.input`
  border: none;
  margin-left: 10px;
  margin-bottom: 15px;
  font-size: 14px;
  &:focus {
      outline: none;
    }
`