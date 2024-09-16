import React from 'react'
import { Subtitle, SectionWrapper } from '../../styles/styled-components'
import StyledHeader from '../StyledHeader'
import { Container } from 'reactstrap'
import WorkFeature from './WorkFeature'
import { workData } from '../../data/workData'

export default function WorkSection() {
	return (
		<SectionWrapper id="work-history">
			<Container>
				<StyledHeader>
					<Subtitle>Work History</Subtitle>
				</StyledHeader>
				{workData.map(data => (
					<WorkFeature {...data} />
				))}
			</Container>
		</SectionWrapper>
	)
}
