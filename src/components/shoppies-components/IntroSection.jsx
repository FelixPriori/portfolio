import React from 'react'
import {Container, Button} from 'reactstrap'
import StyledHeader from '../StyledHeader'
import {StaticImage} from 'gatsby-plugin-image'
import {Title, Showcase, ButtonContainer, RedLight, SectionWrapper} from '../../styles/styled-components'

function IntroSection() {
  return (
    <SectionWrapper>
      <Container id="intro">
        <StyledHeader>
          <Title>Shoppies</Title>
        </StyledHeader>
        <Showcase>
          <StaticImage
            style={{boxShadow: `1px 1px 10px black`, borderRadius: '5px'}}
            imgStyle={{borderRadius: '5px'}}
            src="../../images/shoppies.png"
            alt="Shoppies Landing"
            objectFit="contain"
          />
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
