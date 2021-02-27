import React from 'react'
import {Link} from 'gatsby'
import {Container, Button} from 'reactstrap'
import StyledHeader from '../StyledHeader'
import {Title, ImageWithShadow, Showcase, ButtonContainer, RedLight} from '../../styles/styled-components'
import ShoppiesLanding from '../../images/shoppies.png'

function IntroSection() {
  return (
    <Container id="intro">
      <StyledHeader>
        <Title>Shoppies</Title>
      </StyledHeader>
      <ButtonContainer>
        <Link to="/" className="btn btn-yellow">
          Return
        </Link>
      </ButtonContainer>
      <Showcase>
        <ImageWithShadow src={ShoppiesLanding} alt="Shoppies Landing" className="img-fluid" />
      </Showcase>
      <ButtonContainer>
        <Button color="red" href="https://felix-shoppies.netlify.app/" target="_blank" rel="noreferrer">
          <div>
            <RedLight />
            <p>Live Demo</p>
          </div>
        </Button>
      </ButtonContainer>
    </Container>
  )
}

export default IntroSection
