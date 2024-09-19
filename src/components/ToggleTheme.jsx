import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import {
	ThemeToggleLabel,
	ThemeToggleInput,
	ThemeToggleFormGroup,
} from '../styles/styled-components'

export default function ToggleTheme() {
	return (
		<ThemeToggler>
			{({ theme, toggleTheme }) => (
				<ThemeToggleFormGroup switch>
					<ThemeToggleInput
						type="switch"
						checked={theme === 'dark'}
						onClick={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
					/>
					<ThemeToggleLabel checked={theme === 'dark'}>
						Dark Mode
					</ThemeToggleLabel>
				</ThemeToggleFormGroup>
			)}
		</ThemeToggler>
	)
}
