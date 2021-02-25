import React from 'react'
import AvatarImage from '../../images/avatar.jpg'
import {StyledAvatar} from '../../styles/styled-components'

function Avatar() {
  return <StyledAvatar src={AvatarImage} alt="Felix Headshot" />
}

export default Avatar
