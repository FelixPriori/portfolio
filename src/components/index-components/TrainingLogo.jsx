import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function TrainingLogo({ company }) {
	const defaultImgProps = {
		width: 75,
		height: 75,
		style: {
			borderRadius: 'var(--radius-box)',
		},
	}

	if (company === 'Lighthouse Labs') {
		return (
			<StaticImage
				src="../../images/lighthouselabs.png"
				alt="Lighthouse Labs's Logo"
				{...defaultImgProps}
			/>
		)
	} else if (company === 'BrainStation') {
		return (
			<StaticImage
				src="../../images/brainstation.png"
				alt="BrainStation's Logo"
				{...defaultImgProps}
			/>
		)
	}
}
