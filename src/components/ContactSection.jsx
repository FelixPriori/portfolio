import React from 'react'
import { Container, Row } from 'reactstrap'
import ContactForm from './ContactForm'
import Copyright from './Copyright'
import {
	Subtitle,
	ContactSectionWrapper,
	TitleContainer,
	FormWrapper,
	Paragraph,
} from '../styles/styled-components'

function ContactSection() {
	return (
		<ContactSectionWrapper id="contact">
			<Container>
				<TitleContainer>
					<Subtitle $isContact>Contact</Subtitle>
				</TitleContainer>
				<Paragraph>Please don't hesitate to reach out to me!</Paragraph>
				<Row>
					<FormWrapper lg={6}>
						<ContactForm />
					</FormWrapper>
				</Row>
			</Container>
			<Copyright />
		</ContactSectionWrapper>
	)
}

export default ContactSection
