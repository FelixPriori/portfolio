import React from 'react'
import { Container } from 'reactstrap'
import { SmallSubtitle, GithubLink } from '../../styles/styled-components'

function Credits() {
	return (
		<Container style={{ marginTop: '1rem' }}>
			<SmallSubtitle>Credits</SmallSubtitle>
			<GithubLink
				href="https://www.flaticon.com/free-icons/feedback"
				title="feedback icons"
				rel="noreferrer noopener"
				target="_blank"
			>
				Feedback icons created by itim2101 - Flaticon
			</GithubLink>
		</Container>
	)
}

export default Credits
