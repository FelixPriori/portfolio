import React from 'react'
import {
	Subtitle,
	SectionWrapper,
	SubtitleWrapper,
} from '../../styles/styled-components'
import TrainingFeature from './TrainingFeature'
import { trainingData } from '../../data/trainingData'

export default function TrainingSection() {
	return (
		<SectionWrapper id="training">
			<SubtitleWrapper>
				<Subtitle>Certificates</Subtitle>
			</SubtitleWrapper>
			{trainingData.map(data => (
				<TrainingFeature key={data.companyName} {...data} />
			))}
		</SectionWrapper>
	)
}
