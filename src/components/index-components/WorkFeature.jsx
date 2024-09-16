import React from 'react'
import {
	Paragraph,
	CompanyName,
	DateRange,
	Mark,
	WorkFeatureWrapper,
	WorkLogoWrapper,
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
					<DateRange>{dateRange}</DateRange>
				</div>
			</WorkLogoWrapper>
			<Paragraph>
				<Mark>{descriptionTitle}</Mark>. {description}
			</Paragraph>
		</WorkFeatureWrapper>
	)
}
