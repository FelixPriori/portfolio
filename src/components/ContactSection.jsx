import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import ContactForm from './ContactForm'
import SocialList from './SocialList'
import {Subtitle, SocialMediaColumn, ContactSectionWrapper, TitleContainer} from '../styles/styled-components'
import ContactBackground from '../images/contact-background.svg'

function ContactSection() {
  return (
    <ContactSectionWrapper id="contact" bg={ContactBackground}>
      <Container>
        <TitleContainer>
          <Subtitle isContact>Contact</Subtitle>
        </TitleContainer>

        <Row>
          <SocialMediaColumn md="6">
            <h3>Social Media</h3>
            <SocialList />
          </SocialMediaColumn>
          <Col md="6">
            <h3>Reach out</h3>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </ContactSectionWrapper>
  )
}

export default ContactSection
