import React from 'react'
import styled, {css} from 'styled-components'
import {Container, Row, Col} from 'reactstrap'
import ContactForm from './ContactForm'
import SocialList from './SocialList'
import {Subtitle, SocialMediaColumn} from '../styles/styled-components'
import ContactBackground from '../images/contact-background.svg'

function ContactSection() {
  return (
    <ContactSectionWrapper id="contact" bg={ContactBackground}>
      <Container>
        <TitleContainer>
          <Subtitle color="#eceff4">Contact</Subtitle>
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

const ContactSectionWrapper = styled.section`
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

const TitleContainer = styled.div`
  padding: 2em 0;
`
