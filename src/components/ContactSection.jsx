import React from 'react'
import styled from 'styled-components'
import {Container, Row, Col} from 'reactstrap'
import StyledHeader from './StyledHeader'
import ContactForm from './ContactForm'
import SocialList from './SocialList'
import {TextColumn, Subtitle, SocialMediaColumn} from '../styles/styled-components'

function ContactSection() {
  return (
    <ContactSectionWrapper id="contact">
      <Container>
        <StyledHeader>
          <Subtitle>Contact</Subtitle>
        </StyledHeader>
        <Row>
          <SocialMediaColumn>
            <h3>Social Media</h3>
            <SocialList />
          </SocialMediaColumn>
          <Col>
            <h3>Reach out</h3>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </ContactSectionWrapper>
  )
}

export default ContactSection

const ContactSectionWrapper = styled.section``
