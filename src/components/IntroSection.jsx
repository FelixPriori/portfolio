import React from 'react'
import {Link} from 'gatsby'
import {Container, Row} from 'reactstrap'
import StyledHeader from './StyledHeader'
import Avatar from './Avatar'
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
  )
}

export default IntroSection
