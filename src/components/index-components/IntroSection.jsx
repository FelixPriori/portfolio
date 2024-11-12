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
	ToggleThemeWrapper,
} from '../../styles/styled-components'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import LightPattern from '../../images/pattern.jpeg'
import DarkPattern from '../../images/dark-pattern.jpeg'
import ToggleTheme from '../ToggleTheme'

function IntroSection() {
	return (
		<HeaderSection tag="header">
			<ToggleThemeWrapper>
				<ToggleTheme />
			</ToggleThemeWrapper>

			<HeroWrapper>
				<TextWrapper>
					<TextInnerWrapper>
						<Title $bg={LightPattern} $darkBg={DarkPattern}>
							Felix Rioux Sabourin
						</Title>
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
							href="https://drive.google.com/file/d/1qgunvpS6rqU_98DTGBvWTcCzCIMHL6sC/view?usp=drive_link"
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
