import React from 'react'
import {Link} from 'gatsby'
import {Container, Row} from 'reactstrap'
import StyledHeader from './StyledHeader'
import Avatar from './Avatar'
import SocialList from './SocialList'
import {TextColumn, Title, BigText, ButtonContainer, AvatarColumn} from '../styles/styled-components'

function IntroSection() {
  return (
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
            <a
              className="btn btn-yellow"
              href="https://resume.creddle.io/resume/1upmg1yxkj4"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </ButtonContainer>
        </TextColumn>
        <AvatarColumn>
          <Avatar />
          <SocialList />
        </AvatarColumn>
      </Row>
    </Container>
  )
}

export default IntroSection
