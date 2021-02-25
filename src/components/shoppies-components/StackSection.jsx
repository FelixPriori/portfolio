import React from 'react'
import {Container} from 'reactstrap'
import StyledHeader from '../StyledHeader'
import {Subtitle} from '../../styles/styled-components'

function StackSection() {
  return (
    <Container id="intro">
      <StyledHeader>
        <Subtitle>Stack</Subtitle>
      </StyledHeader>
    </Container>
  )
}

export default StackSection
