import React from 'react'
import TestimonialPhoto from './TestimonialPhoto'
import {
	TestimonialWrapper,
	TestimonialName,
	TestimonialPosition,
	TestimonialQuote,
} from '../../styles/styled-components'
export default function Testimonial({ personName, position, text }) {
	return (
		<TestimonialWrapper>
			<TestimonialPhoto personName={personName} />
			<TestimonialName>{personName}</TestimonialName>
			<TestimonialPosition>{position}</TestimonialPosition>
			<TestimonialQuote>{text}</TestimonialQuote>
		</TestimonialWrapper>
	)
}
