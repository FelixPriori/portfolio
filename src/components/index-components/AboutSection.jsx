import React from 'react'
import StyledHeader from '../StyledHeader'
import {
	Subtitle,
	Paragraph,
	SectionWrapper,
	Mark,
} from '../../styles/styled-components'

function AboutSection() {
	return (
		<SectionWrapper id="about">
			<StyledHeader>
				<Subtitle>About Me</Subtitle>
			</StyledHeader>
			<Paragraph>
				With over <Mark>four years of experience</Mark> in front-end
				development, I am a dynamic professional and an arts-oriented individual
				captivated by the transformative power of programming to bring ideas to
				life. I have contributed to <Mark>over a dozen client projects</Mark>{' '}
				across a <Mark>wide range of industries</Mark>, and I always have a
				passion project ongoing.
			</Paragraph>
			<Paragraph>
				I am passionate about coding and always seek new ways to improve my
				craft. I love to work in <Mark>tight-knit teams</Mark> and find extreme
				satisfaction in{' '}
				<Mark>finding a great solution to a challenging problem</Mark>.
			</Paragraph>
		</SectionWrapper>
	)
}

export default AboutSection
