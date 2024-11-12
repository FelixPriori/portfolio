import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { FormGroup, Label, Input } from 'reactstrap'
import styled from 'styled-components'

const Switch = styled(FormGroup)`
	cursor: pointer;
`

const SwitchLabel = styled(Label)`
	cursor: inherit;
`

const SwitchInput = styled(Input)`
	cursor: inherit;
`

export default function ToggleTheme() {
	return (
		<ThemeToggler>
			{({ theme, toggleTheme }) => (
				<Switch switch>
					<SwitchInput
						id="dark-mode-switch"
						type="switch"
						checked={theme === 'dark'}
						onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
					/>
					<SwitchLabel htmlFor="dark-mode-switch" checked={theme === 'dark'}>
						Dark Mode
					</SwitchLabel>
				</Switch>
			)}
		</ThemeToggler>
	)
}
