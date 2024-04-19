import React from 'react'
import { Container, Row } from 'reactstrap'
import ContactForm from './ContactForm'
import Footer from './Footer'
import { Subtitle, ContactSectionWrapper, TitleContainer, FormWrapper } from '../styles/styled-components'
import ContactBackground from '../images/contact-background.svg'

function ContactSection() {
  return (
    <ContactSectionWrapper id="contact" $bg={ContactBackground}>
      <Container>
        <TitleContainer>
          <Subtitle $isContact>Contact</Subtitle>
        </TitleContainer>

        <Row>
          <FormWrapper lg={6}>
            <ContactForm />
          </FormWrapper>
        </Row>
      </Container>
      <Footer />
    </ContactSectionWrapper>
  )
}

export default ContactSection
