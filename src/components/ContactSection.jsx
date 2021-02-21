import React from 'react'
import styled from 'styled-components'
import {Container, Row} from 'reactstrap'
import StyledHeader from './StyledHeader'
import {TextColumn, Subtitle} from '../styles/styled-components'

function ContactSection() {
  return (
    <ContactSectionWrapper id="contact">
      <Container>
        <StyledHeader>
          <Subtitle>Contact</Subtitle>
        </StyledHeader>
        <Row>
          <TextColumn></TextColumn>
        </Row>
      </Container>
    </ContactSectionWrapper>
  )
}

export default ContactSection

const ContactSectionWrapper = styled.section``
