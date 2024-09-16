import * as React from 'react'
import IntroSection from '../components/index-components/IntroSection'
import AboutSection from '../components/index-components/AboutSection'
// import ProjectsSection from '../components/index-components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import WorkSection from '../components/index-components/WorkSection'
import { Main } from '../styles/styled-components'
// import Navbar from '../components/Navbar'
import Seo from '../components/SEO'

export const Head = () => <Seo title="Felix's Porftolio" />

function IndexPage() {
	return (
		<Main>
			{/* <Navbar /> */}

			<IntroSection />

			<AboutSection />

			<WorkSection />

			{/* <ProjectsSection /> */}

			<ContactSection />
		</Main>
	)
}

export default IndexPage
