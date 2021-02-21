import * as React from 'react'
import DiagonalBackground from '../images/diagonal-background.svg'
import IntroSection from '../components/IntroSection'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import {Main} from '../styles/styled-components'

function IndexPage() {
  return (
    <Main bg={DiagonalBackground}>
      <title>Home Page</title>

      <IntroSection />

      <AboutSection />

      <ProjectsSection />

      <ContactSection />
    </Main>
  )
}

export default IndexPage
