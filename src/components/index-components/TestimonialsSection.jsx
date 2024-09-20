import React from 'react'
import {
	Subtitle,
	SectionWrapper,
	SubtitleWrapper,
} from '../../styles/styled-components'
import { testimonialData } from '../../data/testimonialData'
import Testimonial from './Testimonial'

export default function TestimonialsSection() {
	return (
		<SectionWrapper id="testimonials">
			<SubtitleWrapper>
				<Subtitle>Testimonials</Subtitle>
			</SubtitleWrapper>
			{testimonialData.map(testimonial => (
				<Testimonial {...testimonial} />
			))}
		</SectionWrapper>
	)
}
