import * as React from 'react'
import {
	Title,
	Main,
	StyledLink,
	HeaderSection,
	SectionWrapper,
} from '../styles/styled-components'
import ContactSection from '../components/ContactSection'
import Seo from '../components/SEO'

export const Head = () => <Seo title="404 Page | Felix's Porftolio" />

const NotFoundPage = () => {
	return (
		<>
			<HeaderSection>
				<Title>Page Not Found</Title>
			</HeaderSection>
			<Main tag="main">
				<SectionWrapper>
					<StyledLink to="/">Click here to go back to the main page</StyledLink>
				</SectionWrapper>
			</Main>
			<ContactSection />
		</>
	)
}

export default NotFoundPage
