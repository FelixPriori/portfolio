import * as React from 'react'
import IntroSection from '../components/index-components/IntroSection'
import AboutSection from '../components/index-components/AboutSection'
import TechnologiesSection from '../components/index-components/TechnologiesSection'
import WorkSection from '../components/index-components/WorkSection'
import TrainingSection from '../components/index-components/TrainingSection'
import ContactSection from '../components/ContactSection'
import { Main } from '../styles/styled-components'
import Seo from '../components/SEO'

export const Head = () => <Seo title="Felix's Porftolio" />

function IndexPage() {
	return (
		<>
			<IntroSection />
			<Main tag="main">
				<AboutSection />
				<TechnologiesSection />
				<WorkSection />
				<TrainingSection />
			</Main>
			<ContactSection />
		</>
	)
}

export default IndexPage
