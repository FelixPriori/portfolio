import React from 'react'
import styled from 'styled-components'

function StyledHeader({children}) {
  return (
    <Container>
      <TitleBox>{children}</TitleBox>
      <HighlightBox />
    </Container>
  )
}

export default StyledHeader

const TitleBox = styled.div`
  height: 50px;
`

const HighlightBox = styled.div`
  background-color: #ebcb8b;
  height: 30px;
  position: relative;
  left: 25px;
  top: -25px;
  z-index: -1;
  border-radius: 5px;
`

const Container = styled.div`
  height: 75px;
  width: fit-content;
  margin: 1em;
`
