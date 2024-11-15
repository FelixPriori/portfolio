import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function WorkLogo({ workplace }) {
	const defaultImgProps = {
		width: 75,
		height: 75,
		style: {
			borderRadius: 'var(--radius-box)',
		},
	}

	if (workplace === 'Nurun') {
		return (
			<StaticImage
				src="../../images/nurun.png"
				alt="Nurun's Logo"
				{...defaultImgProps}
			/>
		)
	} else if (workplace === 'Nventive') {
		return (
			<StaticImage
				src="../../images/nventive.png"
				alt="Nventive's Logo"
				{...defaultImgProps}
			/>
		)
	} else if (workplace === 'Webisoft') {
		return (
			<StaticImage
				src="../../images/webisoft.png"
				alt="Webisoft's Logo"
				{...defaultImgProps}
			/>
		)
	} else if (workplace === 'Independant') {
		return (
			<StaticImage
				src="../../images/independant.png"
				alt="Independant"
				width="512px"
				height="512px"
				style={{
					maxWidth: 75,
					maxHeight: 75,
				}}
			/>
		)
	} else if (workplace === 'The future') {
		return (
			<StaticImage
				src="../../images/rocket.png"
				alt="Rocket"
				width="512px"
				height="512px"
				style={{
					maxWidth: 75,
					maxHeight: 75,
				}}
			/>
		)
	}
}
