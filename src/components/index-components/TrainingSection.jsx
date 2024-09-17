import React from 'react'
import { Subtitle, SectionWrapper } from '../../styles/styled-components'
import StyledHeader from '../StyledHeader'
import TrainingFeature from './TrainingFeature'
import { trainingData } from '../../data/trainingData'

export default function TrainingSection() {
	return (
		<SectionWrapper id="training">
			<StyledHeader>
				<Subtitle>Certificates</Subtitle>
			</StyledHeader>
			{trainingData.map(data => (
				<TrainingFeature {...data} />
			))}
		</SectionWrapper>
	)
}
