import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

function Avatar() {
	return (
		<StaticImage
			style={{ borderRadius: '50%', boxShadow: '1px 1px 10px black' }}
			imgStyle={{ borderRadius: '50%' }}
			src="../../images/avatar.jpg"
			alt="Felix Headshot"
			loading="eager"
			layout="constrained"
		/>
	)
}

export default Avatar
