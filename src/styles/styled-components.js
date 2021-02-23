import styled, {css} from 'styled-components'
import {Col} from 'reactstrap'
import {Link} from 'gatsby'

export const Main = styled.main``

export const StyledLink = styled(Link)`
  color: #5e81ac;
  font-size: 20px;

  &:hover {
    color: #a3be8c;
  }
`

export const Title = styled.h1``

export const Subtitle = styled.h2`
  color: ${(props) => (props.color ? props.color : '#5e81ac')};
`

export const AvatarColumn = styled(Col)`
  text-align: center;
`

export const TextColumn = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const BigText = styled.h3`
  display: flex;
  flex-direction: column;
`

export const ButtonContainer = styled.div`
  padding-top: 1em;

  & > a {
    margin-right: 1em;
  }
`

export const Paragraph = styled.p`
  padding: 1em;
`

export const ProjectImage = styled.img`
  max-height: 300px;
  width: 100%;
`

export const ImageColumn = styled(Col)`
  display: flex;
  align-items: center;
`

export const SocialMediaColumn = styled(Col)``
