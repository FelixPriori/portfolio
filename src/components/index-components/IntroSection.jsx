import React from 'react'
import Avatar from './Avatar'
import SocialList from './SocialList'
import {
	Title,
	BigText,
	ButtonContainer,
	HeroWrapper,
	TextWrapper,
	TextInnerWrapper,
	AvatarWrapper,
	HeaderSection,
} from '../../styles/styled-components'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import Pattern from '../../images/pattern.jpeg'

function IntroSection() {
	return (
		<HeaderSection tag="header">
			<HeroWrapper>
				<TextWrapper>
					<TextInnerWrapper>
						<Title $bg={Pattern}>Felix Rioux Sabourin</Title>
						<BigText>Professional Web Developer</BigText>
					</TextInnerWrapper>
				</TextWrapper>
				<AvatarWrapper>
					<Avatar />
					<SocialList />
					<ButtonContainer>
						<Link className="btn btn-blue" to="#contact">
							Contact
						</Link>
						<OutboundLink
							href="https://resume.creddle.io/resume/f0qzoaw5pw"
							target="_blank"
							rel="noreferrer"
							className="btn btn-yellow"
						>
							Resume
						</OutboundLink>
					</ButtonContainer>
				</AvatarWrapper>
			</HeroWrapper>
		</HeaderSection>
	)
}

export default IntroSection
