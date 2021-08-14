import { FC } from 'react'
import { Location, PostItem, Profile, ProfileName, ProfilePicture, UserDisplayInfo } from './post-styling'
import profilePicture from '../../photos/caleb_quinn.png'



type PostProps = {
  post: string
}

export const Post:FC<PostProps> = ({ post }: PostProps) => {

  return (
    <PostItem data-testid='post'>
        <UserDisplayInfo data-testid='user-display-info'>
            <ProfilePicture data-testid='post-profile-picture' src={profilePicture}></ProfilePicture>
            <Profile data-testid='profile-area'>
                <ProfileName data-testid='user-name'>Caleb Quinn</ProfileName>
                <Location>

                </Location>
            </Profile>
        </UserDisplayInfo>
    </PostItem>
  )
}