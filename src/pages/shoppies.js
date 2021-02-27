import React from 'react'
import {Main} from '../styles/styled-components'
import ContactSection from '../components/ContactSection'
import IntroSection from '../components/shoppies-components/IntroSection'
import SummarySection from '../components/shoppies-components/SummarySection'
import StackSection from '../components/shoppies-components/StackSection'
import ExtraFeaturesSection from '../components/shoppies-components/ExtraFeaturesSection'
import ConclusionSection from '../components/shoppies-components/ConclusionSection'

function ShoppiesPage() {
  return (
    <Main>
      <IntroSection />

      <SummarySection />

      <StackSection />

      <ExtraFeaturesSection />

      <ConclusionSection />

      <ContactSection />
    </Main>
  )
}

export default ShoppiesPage
