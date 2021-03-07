import React from 'react'
import {Container, Button} from 'reactstrap'
import StyledHeader from '../StyledHeader'
import {Title, Showcase, ButtonContainer, RedLight, SectionWrapper} from '../../styles/styled-components'
import ImageModal from '../ImageModal'

function IntroSection() {
  return (
    <SectionWrapper>
      <Container id="intro">
        <StyledHeader>
          <Title>Shoppies</Title>
        </StyledHeader>
        <Showcase>
          <ImageModal imagePath="shoppies.png" alt="Shoppies Landing" />
        </Showcase>
        <ButtonContainer>
          <Button color="red" href="https://felix-shoppies.netlify.app/" target="_blank" rel="noreferrer">
            <div>
              <RedLight />
              <p>Live Site</p>
            </div>
          </Button>
        </ButtonContainer>
      </Container>
    </SectionWrapper>
  )
}

export default IntroSection
