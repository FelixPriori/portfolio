import * as React from 'react'
import {Container, Row, Button} from 'reactstrap'
import {Link} from 'gatsby'
import StyledHeader from '../components/StyledHeader'
import Avatar from '../components/Avatar'
import DiagonalBackground from '../images/diagonal-background.svg'
import {
  Title,
  Subtitle,
  Main,
  AvatarColumn,
  IntroSection,
  AboutSection,
  ProjectsSection,
  ContactSection,
  TextColumn,
  BigText,
  ButtonContainer,
} from '../styles/styled-components'

function IndexPage() {
  return (
    <Main bg={DiagonalBackground}>
      <title>Home Page</title>
      <IntroSection id="intro">
        <StyledHeader>
          <Title>Felix Rioux Sabourin</Title>
        </StyledHeader>
        <Container>
          <Row>
            <TextColumn>
              <BigText>
                Web developer
                <span>Portfolio</span>
              </BigText>
              <ButtonContainer>
                <Link className="btn btn-blue" to="#contact">
                  Contact
                </Link>
                <Link className="btn btn-yellow" to="#projects">
                  Projects
                </Link>
              </ButtonContainer>
            </TextColumn>
            <AvatarColumn>
              <Avatar />
            </AvatarColumn>
          </Row>
        </Container>
      </IntroSection>

      <AboutSection id="about">
        <StyledHeader>
          <Subtitle>About Me</Subtitle>
        </StyledHeader>
      </AboutSection>

      <ProjectsSection id="projects">
        <StyledHeader>
          <Subtitle>Projects</Subtitle>
        </StyledHeader>
      </ProjectsSection>

      <ContactSection id="contact">
        <StyledHeader>
          <Subtitle>Contact</Subtitle>
        </StyledHeader>
      </ContactSection>
    </Main>
  )
}

export default IndexPage
