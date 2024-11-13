import React from 'react'
import { Container } from 'reactstrap'
import { GithubLink } from '../styles/styled-components'
import { ReactComponent as Github } from '../images/logo-github.svg'

function Copyright() {
	return (
		<Container style={{ marginTop: '1rem' }}>
			<p>&#169; Felix Rioux Sabourin 2024</p>

			<GithubLink
				href="https://github.com/FelixPriori/portfolio"
				target="_blank"
				rel="noreferrer"
			>
				Source Code
				<Github />
			</GithubLink>
		</Container>
	)
}

export default Copyright
