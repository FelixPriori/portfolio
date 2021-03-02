import * as React from 'react'
import IntroSection from '../components/index-components/IntroSection'
import AboutSection from '../components/index-components/AboutSection'
import ProjectsSection from '../components/index-components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import {Main} from '../styles/styled-components'
import SEO from '../components/SEO'

function IndexPage() {
  return (
    <Main>
      <SEO />

      <IntroSection />

      <AboutSection />

      <ProjectsSection />

      <ContactSection />
    </Main>
  )
}

export default IndexPage
