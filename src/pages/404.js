import * as React from 'react'
import StyledHeader from '../components/StyledHeader'
import { Title, Main, StyledLink } from '../styles/styled-components'
import Seo from '../components/Seo'

const NotFoundPage = () => {
	return (
		<Main>
			<Seo title="404 Page | FelixPriori Porftolio" />
			<StyledHeader>
				<Title>Page Not Found</Title>
				<StyledLink to="/">Click here to go back to the main page</StyledLink>
			</StyledHeader>
		</Main>
	)
}

export default NotFoundPage
