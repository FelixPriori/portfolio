import styled, {css} from 'styled-components'
import {Col, Row} from 'reactstrap'
import {Link} from 'gatsby'

export const Main = styled.main``

export const StyledLink = styled(Link)`
  color: #5e81ac;
  font-size: 20px;

  &:hover {
    color: #a3be8c;
  }
`

export const StyledProjectLink = styled(Link)`
  margin: 1em;
`

export const StyledIconLink = styled.a`
  color: #5e81ac;
  font-size: 20px;
  transition: 200ms;

  svg {
    height: 28px;
    width: 28px;
    fill: #4c566a;
  }

  &:hover {
    text-decoration: none;
    color: #e5e9f0;

    svg {
      fill: #88c0d0;
    }
  }
`

export const Title = styled.h1`
  text-shadow: 5px 5px #ebcb8b;
`

export const Subtitle = styled.h2`
  color: ${({isContact}) => (isContact ? '#eceff4' : '#5e81ac')};
  text-shadow: ${({isContact}) => (isContact ? '5px 5px #5e81ac' : '5px 5px #ebcb8b')};
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

export const HeaderContainer = styled.div`
  height: 100%;
  padding: 3em 1em;
  width: fit-content;
  margin: 1em;
`

export const List = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const ListItem = styled.li`
  margin: 0.5em;
`

export const AboutSectionWrapper = styled.section`
  padding: 3em 0;
`

export const StyledAvatar = styled.img`
  padding: 3em 0;
  border-radius: 50%;
  max-width: 290px;
`

export const ErrorMessage = styled.div`
  color: #bf616a;
`

export const ContactSectionWrapper = styled.section`
  padding: 4em 0;
  color: #eceff4;
  ${(props) =>
    props.bg &&
    css`
      background-image: url(${props.bg});
      background-attachment: scroll;
      background-position: center;
      background-repeat: no-repeat;
    `}

  a {
    color: #eceff4;
  }
`

export const TitleContainer = styled.div`
  padding: 2em 0;
`

export const ProjectWrapper = styled(Row)`
  padding: 0 1em 2em 1em;
`

export const StackRow = styled(Row)`
  padding: 1em 0;
  ul {
    margin-bottom: 0;
  }
`

export const ProjectsSectionWrapper = styled.section`
  padding: 3em 0;
`

export const FormWrapper = styled(Col)``
