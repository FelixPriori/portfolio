import * as React from 'react'
import {
	Title,
	Main,
	StyledLink,
	HeaderSection,
	SectionWrapper,
} from '../styles/styled-components'
import Seo from '../components/SEO'
import ContactSection from '../components/ContactSection'

export const Head = () => (
	<Seo title="Under Construction | FelixPriori Porftolio" />
)

function UnderConstruction() {
	return (
		<>
			<HeaderSection>
				<Title>Page Currently Under Construction</Title>
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

export default UnderConstruction
