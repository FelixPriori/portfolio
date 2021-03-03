import React from 'react'
import {Main} from '../styles/styled-components'
import ContactSection from '../components/ContactSection'
import IntroSection from '../components/shoppies-components/IntroSection'
import SummarySection from '../components/shoppies-components/SummarySection'
import StackSection from '../components/shoppies-components/StackSection'
import ExtraFeaturesSection from '../components/shoppies-components/ExtraFeaturesSection'
import ConclusionSection from '../components/shoppies-components/ConclusionSection'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'

function ShoppiesPage() {
  return (
    <Main>
      <SEO title="Shoppies | FelixPriori Porfolio" />

      <Navbar />

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
