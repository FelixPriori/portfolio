import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { FormGroup, Label, Input } from 'reactstrap'

export default function ToggleTheme() {
	return (
		<ThemeToggler>
			{({ theme, toggleTheme }) => (
				<FormGroup switch>
					<Input
						id="dark-mode-switch"
						type="switch"
						checked={theme === 'dark'}
						onClick={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
					/>
					<Label htmlFor="dark-mode-switch" checked={theme === 'dark'}>
						Dark Mode
					</Label>
				</FormGroup>
			)}
		</ThemeToggler>
	)
}
