import React from 'react'
import styled from 'styled-components'
import AvatarImage from '../images/avatar.jpg'

function Avatar() {
  return <StyledAvatar src={AvatarImage} alt="Felix Headshot" />
}

export default Avatar

const StyledAvatar = styled.img`
  border-radius: 50%;
`
