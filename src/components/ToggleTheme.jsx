import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { FormGroup, Label, Input } from 'reactstrap'
import styled from 'styled-components'

const SwitchLabel = styled(Label)`
	cursor: pointer;
`

const SwitchInput = styled(Input)`
	cursor: pointer;
`

export default function ToggleTheme() {
	return (
		<ThemeToggler>
			{({ theme, toggleTheme }) => (
				<FormGroup switch>
					<SwitchInput
						id="dark-mode-switch"
						type="switch"
						checked={theme === 'dark'}
						onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
					/>
					<SwitchLabel htmlFor="dark-mode-switch" checked={theme === 'dark'}>
						Dark Mode
					</SwitchLabel>
				</FormGroup>
			)}
		</ThemeToggler>
	)
}
