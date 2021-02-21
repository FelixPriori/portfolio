import * as React from 'react'
import StyledHeader from '../components/StyledHeader'
import {Title, Main, StyledLink} from '../styles/styled-components'

const NotFoundPage = () => {
  return (
    <Main>
      <title>Not found</title>
      <StyledHeader>
        <Title>Page Not Found</Title>
        <StyledLink to="/">Click here to go back to the main page</StyledLink>
      </StyledHeader>
    </Main>
  )
}

export default NotFoundPage
