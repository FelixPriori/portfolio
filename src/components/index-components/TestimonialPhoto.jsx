import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function TestimonialPhoto({ personName }) {
	const defaultImgProps = {
		width: 250,
		height: 250,
		style: {
			borderRadius: 'var(--radius-full)',
			filter: 'drop-shadow(var(--shadow-testimonial))',
		},
	}

	switch (personName) {
		case 'Megan Sydiaha':
			return (
				<StaticImage
					src="../../images/megan-syd.png"
					alt="Megan's Photo"
					{...defaultImgProps}
					style={{
						...defaultImgProps.style,
						transform: 'scaleX(-1)',
					}}
				/>
			)
		case 'Sheldon Malboeuf':
			return (
				<StaticImage
					src="../../images/sheldon.png"
					alt="Sheldon's Photo"
					{...defaultImgProps}
				/>
			)
		default:
			return <></>
	}
}
