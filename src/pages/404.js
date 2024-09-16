import * as React from 'react'
import StyledHeader from '../components/StyledHeader'
import { Title, Main, StyledLink } from '../styles/styled-components'
import Seo from '../components/SEO'

export const Head = () => <Seo title="404 Page | Felix's Porftolio" />

const NotFoundPage = () => {
	return (
		<Main>
			<StyledHeader>
				<Title>Page Not Found</Title>
				<StyledLink to="/">Click here to go back to the main page</StyledLink>
			</StyledHeader>
		</Main>
	)
}

export default NotFoundPage
