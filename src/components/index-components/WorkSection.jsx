import React from 'react'
import { Subtitle, SectionWrapper } from '../../styles/styled-components'
import StyledHeader from '../StyledHeader'
import WorkFeature from './WorkFeature'
import { workData } from '../../data/workData'

export default function WorkSection() {
	return (
		<SectionWrapper id="work-history">
			<StyledHeader>
				<Subtitle>Work History</Subtitle>
			</StyledHeader>
			{workData.map(data => (
				<WorkFeature {...data} />
			))}
		</SectionWrapper>
	)
}
