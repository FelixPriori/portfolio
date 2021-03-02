import * as React from 'react'
import styled from 'styled-components'
import StyledHeader from '../components/StyledHeader'
import {Title, Main, StyledLink} from '../styles/styled-components'
import SEO from '../components/SEO'

const SuccessPage = () => {
  return (
    <Main>
      <SEO />

      <StyledHeader>
        <Title>Message sent successfully</Title>
      </StyledHeader>

      <MessageSection>
        <Message>Thanks for reaching out!</Message>
        <StyledLink to="/">Click here to go back to the main page</StyledLink>
      </MessageSection>
    </Main>
  )
}

export default SuccessPage

const MessageSection = styled.section`
  padding: 1em;
`
const Message = styled.h3`
  padding: 1em 0;
`
