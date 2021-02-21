import * as React from 'react'
import StyledHeader from '../components/StyledHeader'
import {Title, Main, StyledLink} from '../styles/styled-components'

function UnderConstruction() {
  return (
    <Main>
      <title>Under Construction Page</title>
      <StyledHeader>
        <Title>Page Currently Under Construction</Title>
        <StyledLink to="/">Click here to go back to the main page</StyledLink>
      </StyledHeader>
    </Main>
  )
}

export default UnderConstruction
