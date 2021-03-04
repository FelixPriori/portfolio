import styled, {css} from 'styled-components'
import {Col, Row} from 'reactstrap'
import {Link} from 'gatsby'

const shadow = `1px 1px 10px #81a1c1, -1px -1px 10px #81a1c1, -1px 1px 10px #81a1c1, 1px -1px 10px #81a1c1`

export const Main = styled.main``

export const SectionWrapper = styled.section`
  padding: 2em 0;
`

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
  color: ${({isContact}) => (isContact ? '#eceff4' : '')};
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
  padding: 1em 0;
  margin-left: 0.5em;

  & > a {
    margin-right: 1em;
  }
`

export const Paragraph = styled.p`
  margin: 0;
  padding: 1em;
`

export const ImageColumn = styled(Col)`
  display: flex;
  align-items: center;
`

export const HeaderContainer = styled.div`
  height: 100%;
  padding: 1em 0;
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
  padding: 1em 0;
`

export const StackRow = styled(Row)`
  padding: 1em 0;
  ul {
    margin-bottom: 0;
  }
`

export const FormWrapper = styled(Col)``

export const Showcase = styled.div``

export const ImageWithShadow = styled.img`
  box-shadow: ${shadow};
  height: ${({height}) => (height ? `${height}px` : '')};
  width: ${({width}) => (width ? `${width}px` : '')};
  max-width: ${({maxWidth}) => (maxWidth ? `${maxWidth}px` : '')};
  margin: 1em 0;
`

export const DivWithShadow = styled.div`
  box-shadow: ${shadow};
  background-color: #f8f9fa;
`

export const ReactSpinningLogo = styled.img`
  height: 60px;
  width: 60px;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: App-logo-spin infinite 20s linear;
`

export const Logo = styled.img`
  height: ${({height}) => (height ? `${height}px` : '')};
  width: ${({width}) => (width ? `${width}px` : '')};
`

export const LogoLinkedContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
  min-width: 120px;
  max-width: 120px;
  min-height: 60px;
  max-height: 120px;
  background-color: #eceff4;
  border-radius: 5px;
  box-shadow: inset 1px 1px 10px #d8dee9;
`

export const LogoCol = styled(Col)`
  display: flex;
  align-items: center;

  h3 {
    margin-left: 2em;
  }
`

export const LogoBoxCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  height: 300px;
  width: 100%;
`

export const MessagePreviewList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0;
    padding: 1em;
  }
`

export const PostersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const SubSection = styled.div`
  padding: 2em 0;
`

export const RedLight = styled.div`
  min-width: 5px;
  min-height: 5px;
  max-width: 5px;
  max-height: 5px;
  background-color: #bf616a;
  border-radius: 50%;
  box-shadow: 1px 1px 5px #bf616a, -1px -1px 5px #bf616a, -1px 1px 5px #bf616a, 1px -1px 5px #bf616a;
`

export const FooterWrapper = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: baseline;
  align-content: baseline;
  padding-top: 4em;
`

export const GithubLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  svg {
    margin-left: 1em;
    height: 32px;
    width: 32px;
    fill: #eceff4;
  }

  &:hover {
    color: #81a1c1;
    svg {
      fill: #81a1c1;
    }
  }
`
