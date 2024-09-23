import React from 'react'
import {
	Subtitle,
	SectionWrapper,
	SubtitleWrapper,
} from '../../styles/styled-components'
import WorkFeature from './WorkFeature'
import { workData } from '../../data/workData'

export default function WorkSection() {
	return (
		<SectionWrapper id="work-history">
			<SubtitleWrapper>
				<Subtitle>Work History</Subtitle>
			</SubtitleWrapper>
			{workData.map(data => (
				<WorkFeature key={data.companyName} {...data} />
			))}
		</SectionWrapper>
	)
}
