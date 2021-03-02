import * as React from 'react'
import StyledHeader from '../components/StyledHeader'
import {Title, Main, StyledLink} from '../styles/styled-components'
import SEO from '../components/SEO'

function UnderConstruction() {
  return (
    <Main>
      <SEO />

      <StyledHeader>
        <Title>Page Currently Under Construction</Title>
        <StyledLink to="/">Click here to go back to the main page</StyledLink>
      </StyledHeader>
    </Main>
  )
}

export default UnderConstruction
