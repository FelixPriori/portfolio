import * as React from 'react'
import {
	Title,
	Main,
	StyledLink,
	HeaderSection,
	SectionWrapper,
	Paragraph,
} from '../styles/styled-components'
import Seo from '../components/SEO'

export const Head = () => <Seo title="Message Sent | FelixPriori Porftolio" />

const SuccessPage = () => {
	return (
		<>
			<HeaderSection>
				<Title>Message sent successfully</Title>
			</HeaderSection>
			<Main tag="main">
				<SectionWrapper>
					<Paragraph>Thanks for reaching out!</Paragraph>
					<StyledLink to="/">Click here to go back to the main page</StyledLink>
				</SectionWrapper>
			</Main>
		</>
	)
}

export default SuccessPage
