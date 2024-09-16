import React from 'react'
import Avatar from './Avatar'
import SocialList from './SocialList'
import {
	Title,
	BigText,
	ButtonContainer,
	SectionWrapper,
	HeroWrapper,
	TextWrapper,
	TextInnerWrapper,
	AvatarWrapper,
} from '../../styles/styled-components'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import { Container } from 'reactstrap'
import Pattern from '../../images/pattern.jpeg'

function IntroSection() {
	return (
		<SectionWrapper>
			<Container>
				<HeroWrapper>
					<TextWrapper>
						<TextInnerWrapper>
							<Title $bg={Pattern}>Felix Rioux Sabourin</Title>
							<BigText>Front-End Software Developer</BigText>
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
								href="https://resume.creddle.io/resume/1upmg1yxkj4"
								target="_blank"
								rel="noreferrer"
								className="btn btn-yellow"
							>
								Resume
							</OutboundLink>
						</ButtonContainer>
					</AvatarWrapper>
				</HeroWrapper>
			</Container>
		</SectionWrapper>
	)
}

export default IntroSection
