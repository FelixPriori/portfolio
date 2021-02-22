import * as React from 'react'
import styled from 'styled-components'
import StyledHeader from '../components/StyledHeader'
import {Title, Main, StyledLink, Subtitle} from '../styles/styled-components'

const SuccessPage = () => {
  return (
    <Main>
      <title>Success</title>
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
