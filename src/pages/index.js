import React, { useEffect } from 'react'
import IntroSection from '../components/index-components/IntroSection'
import AboutSection from '../components/index-components/AboutSection'
import TechnologiesSection from '../components/index-components/TechnologiesSection'
import WorkSection from '../components/index-components/WorkSection'
import TrainingSection from '../components/index-components/TrainingSection'
import ContactSection from '../components/ContactSection'
import TestimonialsSection from '../components/index-components/TestimonialsSection'
import { Main } from '../styles/styled-components'
import Seo from '../components/SEO'
import Navigation from '../components/Navigation'
import styled from 'styled-components'
import { getScrollPosition } from '../util/scroll-utils'

export const Head = () => <Seo title="Felix's Porftolio" />

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: 200px 1fr;
`

const StickyContainer = styled.div`
	padding: 3rem 0;
`

const FullColumn = styled.div`
	grid-column: 1 / -1;
`

function IndexPage({ location }) {
	useEffect(() => {
		console.log(location.hash)
		const onScroll = () => {
			const sections = [...document.querySelectorAll('section')]
			const sectionDetails = sections.map(section => {
				const position = getScrollPosition(section)
				const id = '#' + section.id
				if (position > 0 && position < 150) {
					location.replace(id)
				}
			})
		}

		window.addEventListener('scroll', onScroll)
		return window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<GridContainer>
			<FullColumn>
				<IntroSection />
			</FullColumn>
			<StickyContainer>
				<Navigation />
			</StickyContainer>
			<Main tag="main">
				<AboutSection />
				<TechnologiesSection />
				<WorkSection />
				<TrainingSection />
				<TestimonialsSection />
			</Main>
			<FullColumn>
				<ContactSection />
			</FullColumn>
		</GridContainer>
	)
}

export default IndexPage
