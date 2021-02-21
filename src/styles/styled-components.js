import styled, {css} from 'styled-components'
import {Col} from 'reactstrap'

export const Main = styled.main`
  padding: 1em;
`

export const IntroSection = styled.section`
  min-height: 100vh;
`
export const AboutSection = styled.section`
  min-height: 100vh;
`
export const ProjectsSection = styled.section`
  min-height: 100vh;
`
export const ContactSection = styled.section`
  min-height: 100vh;
`

export const Title = styled.h1`
  color: #5e81ac;
`

export const Subtitle = styled.h2`
  color: #5e81ac;
`

export const AvatarColumn = styled(Col)`
  text-align: center;
`

export const TextColumn = styled(Col)`
  display: flex;
  justify-content: center;
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
