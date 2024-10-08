import React from 'react'
import {
	Paragraph,
	CompanyName,
	DateRange,
	Mark,
	WorkFeatureWrapper,
	WorkLogoWrapper,
	Position,
} from '../../styles/styled-components'
import WorkLogo from './WorkLogo'

export default function WorkFeature({
	companyName,
	position,
	dateRange,
	descriptionTitle,
	description,
	logoPath,
}) {
	return (
		<WorkFeatureWrapper>
			<WorkLogoWrapper>
				<WorkLogo workplace={companyName} />
				<div>
					<CompanyName>{companyName}</CompanyName>
					<Position>{position}</Position>
					<DateRange>{dateRange}</DateRange>
				</div>
			</WorkLogoWrapper>
			<Paragraph>
				<Mark>{descriptionTitle}</Mark>. {description}
			</Paragraph>
		</WorkFeatureWrapper>
	)
}
