import React from 'react'
import StyledHeader from '../StyledHeader'
import LogoBullet from '../LogoBullet'
import {
	Subtitle,
	SectionWrapper,
	LogoBulletList,
} from '../../styles/styled-components'
import reactLogo from '../../images/react-32x32.png'
import javascriptLogo from '../../images/javascript-32x32.png'
import htmlLogo from '../../images/html5-32x32.png'
import cssLogo from '../../images/css3-32x32.png'
import gitLogo from '../../images/git-logo.png'
import nextLogo from '../../images/nextjs.png'
import vueLogo from '../../images/vue.png'
import sassLogo from '../../images/sass.png'
import materialUiLogo from '../../images/materialUI.png'
import reduxLogo from '../../images/redux.png'
import typeScriptLogo from '../../images/typescript.webp'
import gatsbyLogo from '../../images/gatsby-monogram.png'
import graphqlLogo from '../../images/graphql-logo.png'
import styledComponentsLogo from '../../images/styled-components.png'

function TechnologiesSection() {
	return (
		<SectionWrapper id="technologies">
			<StyledHeader>
				<Subtitle>Technologies</Subtitle>
			</StyledHeader>
			<LogoBulletList>
				<LogoBullet logo={reactLogo} alt="React Logo" isReact>
					React.js
				</LogoBullet>
				<LogoBullet logo={nextLogo} alt="NextJs Logo">
					Next.js
				</LogoBullet>
				<LogoBullet logo={typeScriptLogo} alt="TypeScript Logo">
					TypeScript
				</LogoBullet>
				<LogoBullet logo={htmlLogo} alt="HTML Logo">
					HTML5
				</LogoBullet>
				<LogoBullet logo={cssLogo} alt="CSS Logo">
					CSS3
				</LogoBullet>
				<LogoBullet logo={sassLogo} alt="SCSS Logo">
					SCSS
				</LogoBullet>
				<LogoBullet logo={materialUiLogo} alt="MaterialUi Logo">
					MaterialUI
				</LogoBullet>
				<LogoBullet logo={gatsbyLogo} alt="Gatsby Logo">
					Gatsby.js
				</LogoBullet>
				<LogoBullet logo={vueLogo} alt="Vue Logo">
					Vue.js
				</LogoBullet>
				<LogoBullet logo={graphqlLogo} alt="CSS Logo">
					GraphQL
				</LogoBullet>
				<LogoBullet logo={reduxLogo} alt="Redux Logo">
					Redux.js
				</LogoBullet>
				<LogoBullet logo={styledComponentsLogo} alt="Styled Components Logo">
					Styled-Components
				</LogoBullet>
				<LogoBullet logo={gitLogo} alt="Git Logo">
					Git
				</LogoBullet>
				<LogoBullet logo={javascriptLogo} alt="Javascript Logo">
					JavaScript
				</LogoBullet>
			</LogoBulletList>
		</SectionWrapper>
	)
}

export default TechnologiesSection
