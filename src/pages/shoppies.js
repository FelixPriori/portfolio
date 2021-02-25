import React from 'react'
import {Main} from '../styles/styled-components'
import ContactSection from '../components/ContactSection'
import IntroSection from '../components/shoppies-components/IntroSection'
import SummarySection from '../components/shoppies-components/SummarySection'
import StackSection from '../components/shoppies-components/StackSection'

function ShoppiesPage() {
  return (
    <Main>
      <IntroSection />
      <SummarySection />
      {/* <StackSection /> */}
      <ContactSection />
    </Main>
  )
}

export default ShoppiesPage
