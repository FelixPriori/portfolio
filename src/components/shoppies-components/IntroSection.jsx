import React from 'react'
import {Container, Button} from 'reactstrap'
import StyledHeader from '../StyledHeader'
import {Title, ImageWithShadow, Showcase, ButtonContainer} from '../../styles/styled-components'
import ShoppiesLanding from '../../images/shoppies.png'

function IntroSection() {
  return (
    <Container id="intro">
      <StyledHeader>
        <Title>Shoppies</Title>
      </StyledHeader>
      <Showcase>
        <ImageWithShadow src={ShoppiesLanding} alt="Shoppies Landing" className="img-fluid" />
      </Showcase>
      <ButtonContainer>
        <Button color="red" href="https://felix-shoppies.netlify.app/" target="_blank" rel="noreferrer">
          Live Demo
        </Button>
      </ButtonContainer>
    </Container>
  )
}

export default IntroSection
