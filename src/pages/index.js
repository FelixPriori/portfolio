import * as React from 'react'
import IntroSection from '../components/IntroSection'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import {Main} from '../styles/styled-components'

function IndexPage() {
  return (
    <Main>
      <title>Home Page</title>

      <IntroSection />

      <AboutSection />

      <ProjectsSection />

      <ContactSection />
    </Main>
  )
}

export default IndexPage
