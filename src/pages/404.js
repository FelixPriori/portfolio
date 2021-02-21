import * as React from 'react'
import {Link} from 'gatsby'
import StyledHeader from '../components/StyledHeader'
import {Title, Main} from '../styles/styled-components'

const NotFoundPage = () => {
  return (
    <Main>
      <title>Not found</title>
      <StyledHeader>
        <Title>Page Not Found</Title>
        <Link to="/">Click here to go back to the main page</Link>
      </StyledHeader>
    </Main>
  )
}

export default NotFoundPage
