import React, { FC } from 'react'
import { Content, DotDivider, LikeCommentSection, Location, PostItem, Profile, ProfileName, ProfilePicture, UserDisplayInfo, ProfileSection, Time, UserLocation } from './post-styling'
import profilePicture from '../../photos/caleb_quinn.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

type PostProps = {
  post: string
}

export const Post:FC<PostProps> = ({ post }: PostProps) => {

  return (
    <PostItem data-testid='post'>
        <UserDisplayInfo data-testid='user-display-info'>
            <ProfileSection>
                <ProfilePicture data-testid='post-profile-picture' src={profilePicture}></ProfilePicture>
                <Profile data-testid='profile-area'>
                    <ProfileName data-testid='user-name'>Caleb Quinn</ProfileName>
                    <Location data-testid='location-section'>
                        <FontAwesomeIcon data-testid='map-marker' icon={faMapMarkerAlt} />
                        <UserLocation data-testid='user-location'>OH, USA</UserLocation>
                    </Location>
                    <Time data-testid='posted-time'>1 minute ago</Time>
                </Profile>
            </ProfileSection>
            <Content data-testid='post-value'>{post}</Content>
            <LikeCommentSection>
                <span data-testid='post-likes'>0 Likes</span>
                    <DotDivider>&#183;</DotDivider>
                <span data-testid='post-comments'>0 Comments</span>
            </LikeCommentSection>
        </UserDisplayInfo>
    </PostItem>
  )
}