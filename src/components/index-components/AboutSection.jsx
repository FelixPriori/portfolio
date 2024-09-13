import React from 'react'
import { Container } from 'reactstrap'
import StyledHeader from '../StyledHeader'
import LogoBullet from '../LogoBullet'
import {
	Subtitle,
	Paragraph,
	SectionWrapper,
	LogoBulletList,
	Mark,
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

function AboutSection() {
	return (
		<SectionWrapper id="about">
			<Container>
				<StyledHeader>
					<Subtitle>About Me</Subtitle>
				</StyledHeader>
				<Paragraph>
					With over <Mark>four years of experience</Mark> in front-end
					development, I am a <Mark>dynamic professional</Mark> and an{' '}
					<Mark>arts-oriented individual</Mark> captivated by the transformative
					power of programming to bring <Mark>ideas to life</Mark>. I have
					contributed to <Mark>over a dozen client projects</Mark> across a{' '}
					<Mark>wide range of industries</Mark>, and I always have a passion
					project ongoing.
				</Paragraph>
				<Paragraph>
					I am <Mark>passionate about coding</Mark> and always seek new ways to
					improve my craft. I love to work in <Mark>tight-knit teams</Mark> and
					find extreme satisfaction in{' '}
					<Mark>finding a great solution to a challenging problem</Mark>.
				</Paragraph>
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
			</Container>
		</SectionWrapper>
	)
}

export default AboutSection
