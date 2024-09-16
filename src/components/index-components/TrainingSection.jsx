import React from 'react'
import { Subtitle, SectionWrapper } from '../../styles/styled-components'
import StyledHeader from '../StyledHeader'
import { Container } from 'reactstrap'
import TrainingFeature from './TrainingFeature'
import { trainingData } from '../../data/trainingData'

export default function TrainingSection() {
	return (
		<SectionWrapper id="training">
			<Container>
				<StyledHeader>
					<Subtitle>Certificates</Subtitle>
				</StyledHeader>
				{trainingData.map(data => (
					<TrainingFeature {...data} />
				))}
			</Container>
		</SectionWrapper>
	)
}
