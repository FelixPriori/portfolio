import React from 'react'
import {Link} from 'gatsby'
import {OutboundLink} from 'gatsby-plugin-google-gtag'
import {Container, Row} from 'reactstrap'
import StyledHeader from '../StyledHeader'
import Avatar from './Avatar'
import SocialList from './SocialList'
import {TextColumn, Title, BigText, ButtonContainer, AvatarColumn, SectionWrapper} from '../../styles/styled-components'

function IntroSection() {
  return (
    <SectionWrapper>
      <Container id="intro">
        <StyledHeader>
          <Title>Felix Rioux Sabourin</Title>
        </StyledHeader>
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
              <OutboundLink
                className="btn btn-yellow"
                href="https://resume.creddle.io/resume/1upmg1yxkj4"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </OutboundLink>
            </ButtonContainer>
          </TextColumn>
          <AvatarColumn>
            <Avatar />
            <SocialList />
          </AvatarColumn>
        </Row>
      </Container>
    </SectionWrapper>
  )
}

export default IntroSection
