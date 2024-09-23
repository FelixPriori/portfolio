import React from 'react'
import {
	Subtitle,
	SectionWrapper,
	SubtitleWrapper,
	TestimonialsWrapper,
} from '../../styles/styled-components'
import { testimonialData } from '../../data/testimonialData'
import Testimonial from './Testimonial'

export default function TestimonialsSection() {
	return (
		<SectionWrapper id="testimonials">
			<SubtitleWrapper>
				<Subtitle>Testimonials</Subtitle>
			</SubtitleWrapper>
			<TestimonialsWrapper>
				{testimonialData.map(testimonial => (
					<Testimonial key={testimonial.personName} {...testimonial} />
				))}
			</TestimonialsWrapper>
		</SectionWrapper>
	)
}
