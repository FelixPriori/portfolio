import React from 'react'
import StyledHeader from '../StyledHeader'
import Avatar from './Avatar'
import SocialList from './SocialList'
import {
	TextColumn,
	Title,
	BigText,
	ButtonContainer,
	SectionWrapper,
	CustomOutboundButton,
	CustomButton,
	HeroWrapper,
	TextWrapper,
	TextInnerWrapper,
	AvatarWrapper,
} from '../../styles/styled-components'
import PowerLink, { PowerOutboundLink } from '../PowerLink'
import styled from 'styled-components'
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
							<PowerLink to="#contact">Contact</PowerLink>
							<PowerOutboundLink
								href="https://resume.creddle.io/resume/1upmg1yxkj4"
								target="_blank"
								rel="noreferrer"
								color="highlight"
							>
								Resume
							</PowerOutboundLink>
						</ButtonContainer>
					</AvatarWrapper>
				</HeroWrapper>
			</Container>
		</SectionWrapper>
	)
}

export default IntroSection
