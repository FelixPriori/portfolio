import React from 'react'
import {
	Paragraph,
	CompanyName,
	DateRange,
	WorkFeatureWrapper,
	WorkLogoWrapper,
	Position,
} from '../../styles/styled-components'
import TrainingLogo from './TrainingLogo'

export default function TrainingFeature({
	companyName,
	certificate,
	dateRange,
	description,
}) {
	return (
		<WorkFeatureWrapper>
			<WorkLogoWrapper>
				<TrainingLogo company={companyName} />
				<div>
					<CompanyName>{companyName}</CompanyName>
					<Position>{certificate}</Position>
					<DateRange>{dateRange}</DateRange>
				</div>
			</WorkLogoWrapper>
			<Paragraph>{description}</Paragraph>
		</WorkFeatureWrapper>
	)
}
